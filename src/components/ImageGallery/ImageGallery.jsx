import React from 'react';

export const ImageGallery = ({ pictures }) => {
  return (
    <ul>
      {pictures &&
        pictures.map(picture => {
          return (
            <li key={picture.id}>
              <img src={picture.userImageURL} alt={picture.tags} />
            </li>
          );
        })}
    </ul>
  );
};
