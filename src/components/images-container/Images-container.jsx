import React from 'react';
import uuid from 'react-uuid';
import { useImages } from '../../context';
import Image from './Image';
import { StyledImagesContainer } from './images-container-styles';

const Images = () => {
  const images = useImages();
  return (
    <StyledImagesContainer>
      {images.length &&
        images.map(imageObj => (
          <section key={uuid()} className='image-column'>
            {imageObj.map(image => (
              <Image key={image.urls.small} image={image} />
            ))}
          </section>
        ))}
    </StyledImagesContainer>
  );
};

export default Images;
