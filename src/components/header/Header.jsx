import React from 'react';

import {
  useHanldeSubmit,
  usePageValue,
  useSearchValue,
  useUpdatePageValue,
} from '../../context';

const Header = () => {
  const updateSearch = useHanldeSubmit();
  const searchValue = useSearchValue();
  const pageValue = usePageValue();
  const setPageValue = useUpdatePageValue();

  return (
    <div className='image-container-header'>
      <h2 className='output'>Results for {searchValue}</h2>
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
    </div>
  );
};

export default Header;
