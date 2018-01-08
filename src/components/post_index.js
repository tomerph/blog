import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import _ from 'lodash';

import {fetchPosts} from '../actions/index';

class PostIndex extends Component{
renderPosts(){
return  _.map(this.props.posts, post => {
  return (
    <li className='list-group-item' key={post.title}>
  {post.content}
  </li>
);
});
}

  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){

    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new' >
          Add Post
          </Link>
        </div>
          <h3>Posts</h3>
            <ul className='list-group'>
              {this.renderPosts()}
              </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{ posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);
