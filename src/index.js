import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { BookList, Main, DefaultLayout } from './containers';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={DefaultLayout}>
      <IndexRoute component={Main} />
      <Route path='booklist/:search' component={BookList} />
    </Route>
  </Router>
, document.getElementById('root'));
