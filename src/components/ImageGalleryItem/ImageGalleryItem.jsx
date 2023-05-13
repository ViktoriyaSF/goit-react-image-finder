import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ pictures }) => {
  return pictures.map(picture => {
    return (
      <li key={picture.id}>
        <img src={picture.webformatURL} alt={picture.tags} />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};
