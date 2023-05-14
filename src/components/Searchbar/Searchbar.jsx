import { Component } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

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
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>
              <FiSearch size="1.5em" />
            </span>
          </button>
          <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.setSearchQuery}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
