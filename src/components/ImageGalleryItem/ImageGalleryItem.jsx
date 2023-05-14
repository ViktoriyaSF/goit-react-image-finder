import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageModal } from 'components/Modal/ImageModal';
import { StyledImageGalleryItem } from './StyledImageGalleryItem';

export class ImageGalleryItem extends Component {
  //  selectedTags - для заповнення поля alt в модалці
  state = {
    selectedImg: null,
    selectedTags: null,
  };

  // setSelectedImg = () => {
  //   this.setState({ selectedImg: this.props.picture });
  // };
  setSelectedImg = () => {
    this.setState({
      selectedImg: this.props.picture.largeImageURL,
      selectedTags: this.props.picture.tags,
    });
  };
  closeModal = () => {
    this.setState({ selectedImg: null });
  };

  render() {
    const {
      picture: { webformatURL, tags },
    } = this.props;
    return (
      <StyledImageGalleryItem>
        <img src={webformatURL} alt={tags} onClick={this.setSelectedImg} />
        {this.state.selectedImg && (
          <ImageModal
            isOpen={this.state.selectedImg !== null}
            onClose={this.closeModal}
            image={this.state.selectedImg}
            alt={this.state.selectedTag}
          />
        )}
      </StyledImageGalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};

// export const ImageGalleryItem = ({ pictures }) => {
//   return pictures.map(picture => {
//     return (
//       <li key={picture.id}>
//         <img src={picture.webformatURL} alt={picture.tags} />
//       </li>
//     );
//   });
// };
