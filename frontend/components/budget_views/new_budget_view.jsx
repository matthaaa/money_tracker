import React from 'react';
import {Component} from 'react';

import NewBudgetForm from './forms/new_budget_form';


class NewBudgetView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      budget: {
        name: "",
        user_id: this.props.currentUser.id,
      },
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nullBudget = {
      id: null,
      user_id: this.props.currentUser.id,
      name: "",
    }
  }

  // ==================================================
  // Methods
  // ==================================================
  handleUpdate(field) {
    return (event) => {
      this.setState({
        budget: Object.assign(this.state.budget, {
          [field]: event.target.value,
        })
      });
    }
  }

  handleSubmit(event) {
    this.props.addBudget(this.state.budget);
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {budgets} = this.props;
    const budget = budgets === undefined ? this.nullBudget : budgets[Object.keys(budgets)[0]];

    return (
      <div className="new-budget-container">
        <NewBudgetForm
          budget={budget}
          errors={this.props.errors}
          formBudget={this.state.budget}
          onSubmit={this.handleSubmit}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }

};

export default NewBudgetView;
