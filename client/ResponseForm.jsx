import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentEditable from "react-contenteditable"
import api from './api'
import { onResponseChange } from './actions/mediumActions'

class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "<b>Hello</b>"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
  }
  handleChange(evt){
    this.setState({html: evt.target.value});
    this.props.onResponseChange(evt.target.value);
  }

  handlePublish(evt){
    api.publishComment(this.props.medium);
  }
  render () {
    return (
      <div>
        <pre>{JSON.stringify(this.props, '', 4)}</pre>
        <ContentEditable
        className="response-form"
        html={this.props.medium.response} // innerHTML of the editable div
        disabled={false}       // use true to disable edition
        onChange={this.handleChange} // handle innerHTML change
        />
        <a className="button is-primary" onClick={this.handlePublish}>Publish</a>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    medium: state.medium
  };
}

export default connect(mapStateToProps,{onResponseChange})(ResponseForm);
