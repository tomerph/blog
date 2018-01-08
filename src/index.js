import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import PostIndex from './components/post_index';

import PostShow from './components/post_show';
import PostNew from './components/post_new';

import reducers from './reducers';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
  <Switch >
  <Route path="/posts/new" component={PostNew} />
  <Route path="/posts/:id" component={PostShow} />
  <Route path="/" component={PostIndex} />


  </ Switch >
</div>

  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
