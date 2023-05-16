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
    // додаємо елемент в state - контрольючий компонент
    inputValue: '',
  };
  setSearchQuery = evt => {
    const { value } = evt.currentTarget;
    this.setState({ searchQuery: value.toLowerCase().trim() });
    //  робимо метод для цього контролюючого компонента
    this.setState({ inputValue: value.toLowerCase() });
    // console.log(evt.currentTarget.value);
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSearch(this.state.searchQuery);
    // this.reset();
    this.setState({ searchQuery: ' ' });
    // чистимо контролюючий компонент
    this.setState({ inputValue: ' ' });
  };

  render() {
    return (
      <StyledSearchbar>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledSearchFormButton type="submit" onClick={this.handleClear}>
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
            // додали значення value і прирівняли до значення компонента
            value={this.state.inputValue}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
