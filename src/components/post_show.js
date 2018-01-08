import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';


class PostShow extends Component{

componentDidMount(){
  const {id} =this.props.match.params;
  this.props.fetchPost(id);
}
  render(){
    const {post} = this.props;
    if(!post){
      return <h3>Loading....</h3>;
    }
    return (
      <div>
        <h3> {post.title}</h3>
          <h6> {post.categories}</h6>
          <p>{post.content}</p>

      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps){
return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost})(PostShow);
