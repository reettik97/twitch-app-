import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamList extends Component {
  renderError = ({ error  , touched}) => {
    // console.log(touched , error);
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error}</div>
        </div>
      );
    }else{
      return null;
    }
  };

  renderInput = (fromProps) => {
    // console.log(fromProps);
    const className = `field ${fromProps.meta.touched && fromProps.meta.error ? "error" : ""}`
    return (
      <div className={className}>
        <label> {fromProps.label}</label>
        <input {...fromProps.input} autoComplete="off" />
        {this.renderError(fromProps.meta)}
      </div>
    );
  };

  onSubmit(fromValues) {
    console.log(fromValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="decription"
          component={this.renderInput}
          label="Enter Decription"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (fromValues) => {
  const error = {};
  if (!fromValues.title) {
    error.title = "You must enter a title";
  }
  if (!fromValues.decription) {
    error.decription = "you must enter a decription";
  }
  return error;
};

export default reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamList);
