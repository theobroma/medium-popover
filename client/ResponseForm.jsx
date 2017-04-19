import React, { Component } from 'react'
import ContentEditable from "react-contenteditable"

export default class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "<b>Hello</b>"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt){
    this.setState({html: evt.target.value});
  }
  render (){
    return <ContentEditable
      className="response-form"
      html={this.state.html} // innerHTML of the editable div
      disabled={false}       // use true to disable edition
      onChange={this.handleChange} // handle innerHTML change
    />
  }
}
