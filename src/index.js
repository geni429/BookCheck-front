import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { BookList, Main } from './containers';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main} />
    <Route path='/booklist' component={BookList} />
  </Router>
, document.getElementById('root'));
