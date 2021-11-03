import React from 'react';

import {
  useHanldeSubmit,
  useUpdatePageValue,
  useUpdateSearchValue,
} from '../../context';
import { StyledTag } from './images-container-styles';

const Tag = ({ tag }) => {
  const updateSearch = useHanldeSubmit();
  const setSearchValue = useUpdateSearchValue();
  const setPageValue = useUpdatePageValue();
  return (
    <StyledTag
      key={tag.title}
      onClick={() => {
        updateSearch(tag.title, 1);
        setPageValue(1);
        setSearchValue(tag.title);
      }}
    >
      {tag.title}
    </StyledTag>
  );
};

export default Tag;
