import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';

export const ImageGallery = ({ pictures }) => {
  return <ul>{pictures && <ImageGalleryItem pictures={pictures} />}</ul>;
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};
