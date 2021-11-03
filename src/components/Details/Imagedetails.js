import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { token } from '../../token';

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

  console.log(data);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{data.id}</h1>
          <img src={data.urls.regular} alt={data.id} />
        </div>
      )}
    </>
  );
};

export default Imagedetails;
