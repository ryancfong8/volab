// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import { hashHistory } from 'react-router';

class LoginModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
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
      password: this.state.password
    };
    this.props.processForm({ user })
              .then(this.closeModal())
              .then(() => hashHistory.push("decks"));
  }

  demo(event) {
    event.preventDefault();
    const user = {
      username: 'Guest',
      password: 'password'
    };
    this.props.processForm({ user })
              .then(this.closeModal())
              .then(() => hashHistory.push("decks"));
  }

  logout() {
    this.props.logout().then(hashHistory.push("/"));
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
          <button
            onClick={ this.logout.bind(this) }
            type='button'
            className="session-button-login-button">
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className='auth-modal'>
          <button
            onClick={ this.openModal() }
            type='button'
            className="session-button-login-button">
            Login
          </button>
          <Modal
            show={ this.state.open }
            onHide={ this.closeModal() }
            className='login-modal'>
            <Modal.Header  closeButton>
              <Modal.Title className = "Modal-Title">
                <text className= "Login">Login</text>
              </Modal.Title>
              {errorList}
            </Modal.Header>

            <form onSubmit = {this.handleSubmit} className='session-form'>
              <Modal.Body className = "Modal-Body">
                <label>
                  <input
                    type='text'
                    placeholder='Username'
                    onChange={this.update('username')}
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
                  className='login-submit'>
                  Login
                </Button>
                <text className = "or"> Or </text>
                <Button
                  onClick={this.demo}
                  type='button'
                  className='login-submit'>
                  Guest Login
                </Button>
              </Modal.Footer>
            </form>

          </Modal>
        </div>
      );
    }
  }

}

export default LoginModal;
