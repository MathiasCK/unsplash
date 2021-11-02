import React from 'react';

import {
  useHanldeSubmit,
  useUpdatePageValue,
  useUpdateSearchValue,
} from '../../context';

const data = [
  {
    id: 1,
    name: 'Nature',
  },
  {
    id: 2,
    name: 'Adventure',
  },
  {
    id: 3,
    name: 'Cars',
  },
  {
    id: 4,
    name: 'Sunset',
  },
];

const Trending = () => {
  const updateSearch = useHanldeSubmit();
  const setSearchValue = useUpdateSearchValue();
  const setPageValue = useUpdatePageValue();
  return (
    <div className='trending'>
      <p>Trending: </p>
      {data.map(trend => (
        <button
          key={trend.id}
          onClick={e => {
            updateSearch(e.target.innerHTML.toLowerCase(), 1);
            setPageValue(1);
            setSearchValue(e.target.innerHTML.toLowerCase());
          }}
          className='trendy'
        >
          {trend.name}
        </button>
      ))}
    </div>
  );
};

export default Trending;
