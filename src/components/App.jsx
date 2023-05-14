import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import * as API from '../service/api-images';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ThreeDots } from 'react-loader-spinner';

const ERROR_MSG = 'Sorry try again later 😥';
export class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  handelFormSearch = searchQuery => {
    this.setState({
      searchQuery,
      pictures: [],
      page: 1,
    });
  };
  handleFormSearch = searchQuery => {
    this.setState({ searchQuery, page: 1, pictures: [] });
  };

  handleLoadMore = evt => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true, error: null });
        const fetchedApp = await API.fetchImages(
          this.state.searchQuery,
          this.state.page
        );

        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...fetchedApp.hits],
          };
        });
        console.log(fetchedApp.hits);
      } catch (error) {
        this.setState({ error: ERROR_MSG });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  render() {
    return (
      <>
        <Searchbar onSearch={this.handelFormSearch} />
        {this.state.isLoading && <ThreeDots />}
        <ImageGallery pictures={this.state.pictures} />
        <Button onClick={this.handleLoadMore} />
      </>
    );
  }
}
