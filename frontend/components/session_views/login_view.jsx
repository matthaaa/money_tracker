import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
import LoginForm from './forms/login_form';


class LoginView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.clearErrors();
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleUpdate(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <main className="logged-out-view">
        <div className="login-form-container">
          <div className="login-form-prompt">
            <p>
              Login and check your finances!
            </p>
          </div>
          <div className="login-view-main-content fadeIn">
            <LoginForm
              errors={this.props.errors}
              formUser={this.state}
              onSubmit={this.handleSubmit}
              onUpdate={this.handleUpdate}
            />
            <Link to="/signup">Sign Up!</Link>
          </div>
        </div>
      </main>
    );
  }
};


export default LoginView;
