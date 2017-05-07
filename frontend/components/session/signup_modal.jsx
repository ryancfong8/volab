// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import { hashHistory } from 'react-router';

class SignupModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    return () => this.setState({ open: true });
  }

  closeModal() {
    return () => {
      this.props.resetErrors();
      return this.setState({ open: false });
    };
  }

  update(field) {
    return event => this.setState({[field]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    this.props.processForm({ user })
              .then(this.closeModal())
              .then(() => hashHistory.push("decks"));
  }

  render() {
    const errorList = (
      <ul>
        {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
    );

    if (this.props.currentUser) {
      return (
        <div className='auth-modal'>
          <h2 className="welcome">Welcome {this.props.currentUser.username}!</h2>
        </div>
      );
    } else {
      return (
        <div className='auth-modal'>
          <button
            onClick={ this.openModal() }
            type='button'
            className="session-button-signup-button">
            Sign Up
          </button>
          <Modal
            show={ this.state.open }
            onHide={ this.closeModal() }
            className='signup-modal'>
            <Modal.Header closeButton>
              <Modal.Title className = "Modal-Title">
                <text className='Login'>Sign Up </text>
              </Modal.Title>
              {errorList}
            </Modal.Header>

            <form onSubmit = {this.handleSubmit} className='session-form'>
              <Modal.Body className= "Modal-Body">
                <label>
                  <input
                    type='text'
                    placeholder='Username'
                    onChange={this.update('username')}
                    className='auth-input'/>
                </label>
                <label>
                  <input
                    type='text'
                    placeholder='Email'
                    onChange={this.update('email')}
                    className='auth-input'/>
                </label>
                <label>
                  <input
                    type='password'
                    placeholder='Password'
                    onChange={this.update('password')}
                    className='auth-input'/>
                </label>
              </Modal.Body>
              <Modal.Footer className = "Modal-Footer">
                <Button
                  type='submit'
                  className='signup-submit'>
                  Sign Up
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      );
    }
  }

}

export default SignupModal;
