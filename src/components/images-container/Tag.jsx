import React from 'react';

import {
  useHanldeSubmit,
  useUpdatePageValue,
  useUpdateSearchValue,
} from '../../context';

const Tag = ({ tag }) => {
  const updateSearch = useHanldeSubmit();
  const setSearchValue = useUpdateSearchValue();
  const setPageValue = useUpdatePageValue();
  return (
    <button
      className='tag'
      key={tag.title}
      onClick={() => {
        updateSearch(tag.title, 1);
        setPageValue(1);
        setSearchValue(tag.title);
      }}
    >
      {tag.title}
    </button>
  );
};

export default Tag;
