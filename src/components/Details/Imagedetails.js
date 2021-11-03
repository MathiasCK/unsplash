import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { StyledImageDetails } from './image-details-styles';
import { FaCamera, FaMapPin } from 'react-icons/fa';
import DetailTag from './DetailTag';

const getImageDetails = async id => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/${id}?&client_id=${process.env.REACT_APP_UNSPLASH_TOKEN}`,
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
              <a
                href={data.urls.regular}
                terget='_blank'
                download
                className='button'
              >
                Download
              </a>
            </div>
          </div>
          <div className='image'>
            <img src={data.urls.regular} alt={data.id} />
          </div>
          <footer className='footer'>
            <div className='footer__statstics'>
              <div className='footer-statistics--statistic'>
                <h1>Views: </h1>
                <p>{data.views}</p>
              </div>
              <div className='footer-statistics--statistic'>
                <h1>Downloads: </h1>
                <p>{data.downloads}</p>
              </div>
            </div>
            <br />
            <div className='footer__info'>
              <div className='footer__info--info'>
                <FaCamera />
                <p>{data.exif.name || 'Unknown'}</p>
              </div>
              <div className='footer__info--info'>
                <FaMapPin />
                <p>{data.location.title || 'Unknown'}</p>
              </div>
            </div>
            <h1>Related Tags</h1>
            <div className='footer__tags'>
              {data.tags.map(tag => (
                <DetailTag key={tag.title} tag={tag} />
              ))}
            </div>
          </footer>
        </StyledImageDetails>
      )}
    </>
  );
};

export default Imagedetails;
