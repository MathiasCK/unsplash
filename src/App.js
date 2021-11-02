import React, { useEffect } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Images from './components/Images-container/Images-container';
import {
  useHanldeSubmit,
  useUpdatePageValue,
  useUpdateSearchValue,
} from './context';
import './main.css';

const App = () => {
  const updateSearch = useHanldeSubmit();
  const setSearchValue = useUpdateSearchValue();
  const setPageValue = useUpdatePageValue();

  useEffect(() => {
    updateSearch('random', 1);
    setPageValue(1);
    setSearchValue('random');
  }, []);

  return (
    <>
      <Form />
      <Header />
      <Images />
    </>
  );
};

export default App;
