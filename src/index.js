import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { BookList, Main, DefaultLayout, BookDetail } from './containers';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={DefaultLayout}>
      <IndexRoute component={Main} />
      <Route path='book/list/:search' component={BookList} />
      <Route path='book/detail/:book' component={BookDetail}/>
    </Route>
  </Router>
, document.getElementById('root'));
