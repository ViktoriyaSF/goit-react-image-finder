import { Component } from 'react';
import PropTypes from 'prop-types';

import { FiSearch } from 'react-icons/fi';
import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormInput,
} from './StyledSearchbar';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  setSearchQuery = evt => {
    // console.log(evt.currentTarget.value);
    this.setState({
      searchQuery: evt.currentTarget.value.toLowerCase().trim(),
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSearch(this.state.searchQuery);
    this.setState({ searchQuery: ' ' });
  };

  render() {
    return (
      <StyledSearchbar>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledSearchFormButton type="submit">
            <span>
              <FiSearch size="1.5em" />
            </span>
          </StyledSearchFormButton>
          <StyledSearchFormInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.setSearchQuery}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
