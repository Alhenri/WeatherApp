import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// Importação das paginas
import Home from './pages/PageHome';
import NotFound from './pages/NotFound';
import AddLocal from './pages/PageAddLocal'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ Home } exact />
      <Route path='/AddLocal' component={ AddLocal } exact />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
