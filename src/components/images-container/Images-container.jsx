import React from 'react';

import { useImages } from '../../context';
import Image from './Image';

const Images = () => {
  const images = useImages();
  return (
    <main className='image-container'>
      {images.length &&
        images.map(imageObj => (
          <section key={imageObj.id} className='image-column'>
            {imageObj.map(image => (
              <Image key={image.urls.small} image={image} />
            ))}
          </section>
        ))}
    </main>
  );
};

export default Images;
