import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/main.css';
import Homepage from './components/Homepage/Homepage';
import Imagedetails from './components/Details/Imagedetails';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/image/:imageId'>
          <Imagedetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
