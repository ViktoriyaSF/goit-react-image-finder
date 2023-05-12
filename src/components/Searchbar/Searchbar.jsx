import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSearch(this.state.searchQuery);
    this.setState({ searchQuery: ' ' });
  };
  setSearchQuery = evt => {
    console.log(evt.currentTarget.value);
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
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
