import React from 'react';
import Tag from './Tag';

const Image = ({ image }) => {
  return (
    <>
      <article className='image-card'>
        <header className='image'>
          <img src={image.urls.small} alt='Avatar' />
          <div className='image-overlay'>
            <div className='user'>
              <div className='profile-img'>
                <img
                  alt={image.user.profile_image.small}
                  src={image.user.profile_image.small}
                />
              </div>
              <p>
                Creator: {image.user.first_name} {image.user.last_name}
              </p>
            </div>
          </div>
        </header>
      </article>
      <footer className='footer'>
        {image.tags.map(tag => (
          <Tag key={tag.title} tag={tag} />
        ))}
      </footer>
    </>
  );
};

export default Image;
