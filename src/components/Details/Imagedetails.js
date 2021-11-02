import React from 'react';
import { useParams } from 'react-router';
import { useGetImageDetails } from '../../context';

const Imagedetails = () => {
  const { imageId } = useParams();
  const details = useGetImageDetails();

  const data = async () => await details(imageId);

  console.log(data);

  return <div>{imageId}</div>;
};

export default Imagedetails;
