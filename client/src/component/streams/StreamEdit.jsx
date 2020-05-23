import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream , editStream} from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  onSubmit = (formValues)=>{
    const streamId = this.props.match.params.id;
     this.props.editStream(streamId , formValues);
  }

  render() {
    if(!this.props.stream){
      return  <div>Loading ....</div>
    }

  return (
  <div>
    <h3>Edit a Stream</h3>
    <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream , "title" , "description")} />
  </div>
  );
  }
}

//  ownProps is component's props
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream , editStream})(StreamEdit);
