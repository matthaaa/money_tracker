import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
import LoginForm from './forms/LoginForm';
import MainLogo from '..//generic/logos/main_logo';
import AppPreview from '../generic/app_preview';


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
    if (this.props.isDemo) {
      this.handleDemo();
    }
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
        <div className="login-view-main-content fadeIn">
          <LoginForm
            errors={this.props.errors}
            formUser={this.state}
            onSubmit={this.handleSubmit}
            onUpdate={this.handleUpdate}
          />
        </div>
      </main>
    );
  }
};


export default LoginView;
