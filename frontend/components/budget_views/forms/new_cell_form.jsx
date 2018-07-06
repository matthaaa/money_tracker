import React from 'react';
import {Component} from 'react';

// Components
import CustomButton from '../../generic/buttons/custom_button'
import FormInput from '../../generic/forms/form_input'
import FormErrors from '../../generic/forms/form_errors'


class NewCellForm extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderValueInput(formCell, onUpdate) {
    return (
      <FormInput
        placeholder={""}
        contentClassName={"new-cell-input"}
        value={formCell.value}
        onChange={onUpdate('value')}
      />
    );
  }

  render() {
    const {
      errors,
      formCell,
      onUpdate,
      onSubmit,
    } = this.props;

    return (
      <form className="cell-form-content">
        {this.renderValueInput(formCell, onUpdate)}
        <CustomButton
          className="new-cell-submit-button"
          text={"Add Cell"}
          onPress={onSubmit}
        />
        <FormErrors errors={errors} />
      </form>
    );
  }

};


export default NewCellForm;
