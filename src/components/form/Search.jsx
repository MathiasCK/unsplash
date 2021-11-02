import React from 'react';

import { useUpdateSearchValue } from '../../context';
import Trending from './Trending';

const Search = () => {
  const setSearchValue = useUpdateSearchValue();

  return (
    <div className='search'>
      <div className='info'>
        <h4>Unsplash 2.0</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className='form-control'>
        <input
          onInput={e => setSearchValue(e.target.value)}
          placeholder='Search for images'
          type='text'
          className='search-field'
        />
        <button id='search-btn' type='submit'>
          <svg
            width='32'
            height='32'
            className='DFW_E nT46U NIGLg'
            viewBox='0 0 32 32'
            version='1.1'
            aria-hidden='false'
          >
            <path d='M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z'></path>
          </svg>
        </button>
      </div>
      <Trending />
    </div>
  );
};

export default Search;
