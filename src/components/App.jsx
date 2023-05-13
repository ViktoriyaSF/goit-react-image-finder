import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import * as API from '../service/api-images';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    page: 1,
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
        console.log('error');
      } finally {
        console.log(this.state);
      }
    }
  }
  render() {
    return (
      <>
        <Searchbar onSearch={this.handelFormSearch} />
        <ImageGallery pictures={this.state.pictures} />
        <Button onClick={this.handleLoadMore} />
      </>
    );
  }
}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
