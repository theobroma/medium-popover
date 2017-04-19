import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import classnames from 'classnames';
import validateInput from '../server/shared/validations/signup';
import TextFieldGroup from './common/TextFieldGroup';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.context.router.push('/');
        },
        err => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { username, password, passwordConfirm, errors, isLoading } = this.state;
    return (
      <div>
        <div className="columns" >
          <div className="column is-6 is-offset-3">
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                field="username"
                label="Username / Email"
                value={username}
                error={errors.username}
                onChange={this.onChange}
                icon="fa-envelope"
              />
              <TextFieldGroup
                field="password"
                label="Password"
                value={password}
                error={errors.password}
                onChange={this.onChange}
                icon="fa-lock"
              />
              <TextFieldGroup
                field="passwordConfirm"
                label="Password Confirmation"
                value={passwordConfirm}
                error={errors.passwordConfirm}
                onChange={this.onChange}
                icon="fa-lock"
              />
              <p className="control">
                <button className={classnames('button', 'is-success', { 'is-loading': this.state.isLoading })}>
                  Продолжить
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="columns" >
          <div className="column is-6 is-offset-3">
            {/*<pre>{JSON.stringify(this.state, '', 4)}</pre>*/}
          </div>
        </div>
      </div>
    );
  }
}


SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};
