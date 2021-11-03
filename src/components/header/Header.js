import React, { useEffect, useState } from 'react';

import {
  useHanldeSubmit,
  usePageValue,
  useSearchValue,
  useUpdatePageValue,
} from '../../context';

import { StyledHeader } from './header-styles';

const Header = () => {
  const updateSearch = useHanldeSubmit();
  const searchValue = useSearchValue();
  const pageValue = usePageValue();
  const setPageValue = useUpdatePageValue();

  const [searchValueToDisplay, setSearchValueToDisplay] = useState('');

  useEffect(() => {
    setSearchValueToDisplay(localStorage.getItem('searchValue'));
  }, [updateSearch]);

  return (
    <StyledHeader>
      <h2 className='output'>Results for {searchValueToDisplay}</h2>
      <div className='buttons'>
        <button
          onClick={() => {
            if (pageValue === 1) {
              return;
            }
            setPageValue(pageValue - 1);
            updateSearch(searchValue, pageValue);
          }}
        >
          Previous
        </button>
        <p className='page'>{pageValue}</p>
        <button
          onClick={() => {
            setPageValue(pageValue + 1);
            updateSearch(searchValue, pageValue);
          }}
        >
          Next
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
