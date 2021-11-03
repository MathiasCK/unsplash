import React from 'react';
import { useHistory } from 'react-router';
import { useHanldeSubmit } from '../../context';
import { StyledTag } from '../Images-container/images-container-styles';

const DetailTag = ({ tag }) => {
  const updateSearch = useHanldeSubmit();
  const history = useHistory();
  return (
    <StyledTag
      onClick={async e => {
        console.log(e);
        await updateSearch(e.target.innerHTML, 1);
        history.push('/');
      }}
    >
      {tag.title}
    </StyledTag>
  );
};

export default DetailTag;
