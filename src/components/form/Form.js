import React from 'react';

import {
  useHanldeSubmit,
  useSearchValue,
  useUpdatePageValue,
} from '../../context';
import { StyledForm } from './form-styles';
import Search from './Search';

const Form = () => {
  const updateSearch = useHanldeSubmit();
  const searchValue = useSearchValue();
  const setPageValue = useUpdatePageValue();
  return (
    <StyledForm
      onSubmit={e => {
        e.preventDefault();
        updateSearch(searchValue, 1);
        setPageValue(1);
      }}
    >
      <Search />
    </StyledForm>
  );
};

export default Form;
