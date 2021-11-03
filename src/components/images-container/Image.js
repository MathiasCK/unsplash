import React from 'react';
import { StyledImageCard, StyledImageFooter } from './images-container-styles';
import { Link } from 'react-router-dom';
import Tag from './Tag';

const Image = ({ image }) => {
  return (
    <>
      <Link to={`/image/${image.id}`}>
        <StyledImageCard>
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
        </StyledImageCard>
      </Link>
      <StyledImageFooter>
        {image.tags.map(tag => (
          <Tag key={tag.title} tag={tag} />
        ))}
      </StyledImageFooter>
    </>
  );
};

export default Image;
