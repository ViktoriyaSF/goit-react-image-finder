import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    search: '',
  };
  searchImg = evt => {
    console.log(this.state.evt.currentTarget.value);
  };
  render() {
    return (
      <header>
        <form onSubmit={this.searchImg}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
