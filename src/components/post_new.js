import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPost} from '../actions/index';

class PostNew extends Component{
  renderField(field){
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
      return(
        <div className={className}>
        <label>{field.label} </label>
          <input
            type='text'
            {...field.input}
            className='form-control'
            />
            <div className='text-help'>
            {field.meta.touched ? field.meta.error : ''}
            </div>
        </div>
      )
  }

  onSubmit(values){
    console.log(values);
    this.props.createPost(values, ()=>{
        this.props.history.push('/');
    });

  }


  render(){
    const {handleSubmit} = this.props;
    return (

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Field label='Title' name='title' component={this.renderField}/>
          <Field label='Categories' name='categories' component={this.renderField}/>
          <Field label='Post Content' name='content' component={this.renderField}/>

          <button type='submit' className='btn btn-primary'>Submit </button>
          <Link to='/' className='btn btn-danger' >Cancel </Link>

        </form>

    )
  }
}

function validate(values){
const errors = {};
if(!values.title || values.title.length <3){
  errors.title = 'Enter A Title that is at least 3 chars!';
}
if(!values.categories){
  errors.categories = 'Enter A Categories!';
}
if(!values.content){
  errors.content = 'Enter A Content!';
}
//if errrors is empty , the form is fine to submit
// if errors has any property redux assums its invalid
return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostNewForm'
})(
  connect(null,{createPost})(PostNew)
);
