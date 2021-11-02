import React from 'react';

import {
  useHanldeSubmit,
  useSearchValue,
  useUpdatePageValue,
  useUpdateSearchValue,
} from '../../context';
import Search from './Search';

const Form = () => {
  const updateSearch = useHanldeSubmit();
  const searchValue = useSearchValue();
  const setSearchValue = useUpdateSearchValue();
  const setPageValue = useUpdatePageValue();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateSearch(searchValue, 1);
        setPageValue(1);
      }}
    >
      <Search />
    </form>
  );
};

export default Form;
