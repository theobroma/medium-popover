import React, { Component } from 'react';

export default class MediumCommentsItem extends Component {

  render() {
    const {username, content, excerption, createdAt} = this.props.item;
    return (
      <div className="comment-item">
        <div className="comment-header">
          <div className="comment-author">{username}</div>
        </div>
        <div className="comment-excerption">{excerption}</div>
        <div className="comment-content">{content}</div>
      </div>
    );
  }
}
