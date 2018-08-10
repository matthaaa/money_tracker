import React from 'react';
import {Component} from 'react';

import NewCellForm from './forms/new_cell_form';


class NewBudgetView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      budget: {
        user_id: this.props.currentUser.id,
        name: "",
      }
      cell: {
        budget_id: null,
        value: "",
      },
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ==================================================
  // Methods
  // ==================================================
  handleUpdate(field) {
    console.log(field);
    console.log(event);
    return (event) => {
      this.setState({
        cell: Object.assign(this.state.cell, {
          [field]: event.target.value,
        })
      });
    }
  }

  handleSubmit() {
    this.props.addCell(this.state.cell);
    this.setState({
      comment: Object.assign(this.state.cell, {
        body: "",
      })
    })
  }

  // ==================================================
  // Render
  // ==================================================
  renderCellForm() {
    return (
      <NewCellForm
        errors={this.props.errors}
        formCell={this.state.cell}
        onSubmit={this.handleSubmit}
        onUpdate={this.handleUpdate}
      />
    );
  }

  renderContent() {
    // TODO: Insert condition for showing new budget or new cell form.
    return this.renderCellForm();
  }

  render() {
    return (
      <div className="new-budget-container">
        {this.renderContent()}
      </div>
    );
  }

};

export default NewBudgetView;
