import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';

export const ImageGallery = ({ pictures }) => {
  return (
    <ul>
      {pictures &&
        pictures.map(picture => {
          return <ImageGalleryItem key={picture.id} picture={picture} />;
        })}
    </ul>
  );
};
ImageGallery.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

// export const ImageGallery = ({ pictures }) => {
//   return <ul>{pictures && <ImageGalleryItem pictures={pictures} />}</ul>;
// };
