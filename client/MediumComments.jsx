import React, { Component } from 'react';
import shortid from 'shortid';
import api from './api';
import MediumCommentsItem from './MediumCommentsItem';

export default class MediumComments extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    api.listComments().then((result) => {
      this.setState({ items: result.data });
    });
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="comment-title column is-12">Responses</div>
            <div className="comment-list column is-12">
              {this.state.items.map(item => (<MediumCommentsItem key={shortid.generate()} item={item} />))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
