import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
// import NewUserForm from './components/new_user_form';


class SignupView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
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
  // Callbacks
  // ==================================================
  handleUpdate(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <div className="signup-view-main-content fadeIn">
        <CustomButton
          isLink
          path={"/login/demo"}
          text={"Log in with Demo"}
        />
        {this.renderOrBar()}
        <NewUserForm
          errors={this.props.errors}
          formUser={this.state}
          onSubmit={this.handleSubmit}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }

};


export default SignupView;
