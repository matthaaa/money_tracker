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
      cell: {
        value: "",
      }
    };
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

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <div className="new-budget-container">
        <NewCellForm
          errors={this.props.errors}
          formCell={this.state.cell}
          onSubmit={this.handleSubmit}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }

};

export default NewBudgetView;
