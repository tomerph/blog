import {FETCH_POSTS, FETCH_POST} from '../actions/index.js';
import _ from 'lodash';

export default function (state={}, action){
  switch(action.type){
    case FETCH_POSTS:

    return _.mapKeys(action.payload.data, 'id');

    case FETCH_POST:
    const post = action.payload.data;
    const newState = {...state };
    newState[post.id] = post;
    return newState;

    default:
    return state;
  }
}
