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
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestBudgets();
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
    console.log(this.state.budget);
    this.props.addBudget(this.state.budget);
    // this.props.requestBudget(this.props.budget);
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    console.log(this.props);
    return (
      <div className="new-budget-container">
        <NewBudgetForm
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
