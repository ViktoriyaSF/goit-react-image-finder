import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as API from '../service/api-images';
import { Layout } from './Layout/Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { BtnUp } from './BtnUP/BtnUp';
import { GlobalStyle } from './BasicStyles/GlobalStyle';

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
    const newQuery = searchQuery;
    if (this.state.searchQuery === newQuery.trim()) {
      if (!newQuery) {
        return Notify.failure(
          'Sorry, the search field cannot be empty. Please enter information to search.'
        );
      }
      return Notify.info('You just searched for that name');
    }
    this.setState({
      searchQuery,
      pictures: [],
      page: 1,
    });
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
        if (fetchedApp.hits.length === 0) {
          Notify.warning(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        if (fetchedApp.hits.length < 12 && fetchedApp.hits.length !== 0) {
          Notify.info(
            "We're sorry, but you've reached the end of search results."
          );
        }
        // console.log(fetchedApp.hits);
      } catch (error) {
        this.setState({ error: ERROR_MSG });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <Layout>
        <Searchbar onSearch={this.handelFormSearch} />
        <ImageGallery pictures={this.state.pictures} />
        {this.state.isLoading && <Loader />}
        {this.state.pictures.length >= 12 && (
          <Button onClick={this.handleLoadMore} />
        )}
        <BtnUp />
        <GlobalStyle />
      </Layout>
    );
  }
}
