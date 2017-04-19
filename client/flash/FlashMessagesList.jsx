import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../actions/flashMessages';


class FlashMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    );
    return (
      <section className={classnames({ 'section': this.props.messages.length !== 0 })}>
        <div className="container">
          <div className="message-list">{messages}</div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
