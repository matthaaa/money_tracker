import React from 'react';
import {Component} from 'react';

// Components
import CustomButton from '../../generic/buttons/custom_button'
import FormInput from '../../generic/forms/form_input'
import FormErrors from '../../generic/forms/form_errors'


class NewBudgetForm extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderNameInput(formBudget, onUpdate) {
    return (
      <FormInput
        placeholder={""}
        contentClassName={"new-budget-input"}
        value={formBudget.name}
        onChange={onUpdate('name')}
      />
    );
  }

  render() {
    const {
      errors,
      budget,
      formBudget,
      onUpdate,
      onSubmit,
    } = this.props;

    return (
      <form className="budget-form-content">
        {this.renderNameInput(formBudget, onUpdate)}
        <CustomButton
          isLink
          path={`/budgets/${budget.id}`}
          className="new-budget-submit-button"
          text={"Continue"}
          onPress={onSubmit}
        />
        <FormErrors errors={errors} />
      </form>
    );
  }

};


export default NewBudgetForm;
