import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { token } from '../../token';
import Spinner from '../Spinner';
import { StyledImageDetails } from './image-details';

const getImageDetails = async id => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/${id}?&client_id=${token}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const Imagedetails = () => {
  const { imageId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getImageData = async () => {
      const image = await getImageDetails(imageId);
      return setData(image);
    };
    getImageData();
  }, []);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Spinner />
      ) : (
        <StyledImageDetails>
          <div className='header'>
            <div className='user'>
              <div className='user-image'>
                <img
                  src={data.user.profile_image.small}
                  alt={data.alt_description}
                />
              </div>
              <div className='user-info'>
                <p className='name'>
                  {data.user.first_name}, {data.user.last_name}
                </p>
                <Link
                  to={`https://www.instagram.com/${data.user.instagram_username}`}
                >
                  @{data.user.instagram_username}
                </Link>
              </div>
            </div>
            <div className='actions'>
              <Link className='link' to='/'>
                Back to images
              </Link>
              <a className='button'>Download</a>
            </div>
          </div>
          <div className='image'>
            <img src={data.urls.regular} alt={data.id} />
          </div>
          <footer className='footer'>footer</footer>
        </StyledImageDetails>
      )}
    </>
  );
};

export default Imagedetails;
