import React from 'react';
import {Component} from 'react';

// Components
import CustomButton from '../../generic/buttons/custom_button'
import FormInput from '../../generic/forms/form_input'
import FormErrors from '../../generic/forms/form_errors';


class LoginForm extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderUsernameInput(formUser, onUpdate) {
    return (
      <FormInput
        autoFocus
        type="text"
        placeholder={"Username"}
        contentClassName={"login-input"}
        value={formUser.username}
        onChange={onUpdate('username')}
      />
    );
  }

  renderPasswordInput(formUser, onUpdate) {
    return (
      <FormInput
        type="password"
        placeholder={"Password"}
        contentClassName={"login-input password-input"}
        value={formUser.password}
        onChange={onUpdate('password')}
      />
    );
  }

  render() {
    const {
      errors,
      formUser,
      onUpdate,
      onSubmit,
    } = this.props;

    return (
      <form className="login-form-content">
        {this.renderUsernameInput(formUser, onUpdate)}
        {this.renderPasswordInput(formUser, onUpdate)}
        <CustomButton
          className="login-button"
          text={"Log In"}
          onPress={onSubmit}
        />
        <FormErrors errors={errors} />
      </form>
    );
  }

};


export default LoginForm;
