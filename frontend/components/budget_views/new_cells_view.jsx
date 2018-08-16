import React from 'react';
import {Component} from 'react';

import NewCellForm from './forms/new_cell_form';


class NewCellsView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      cell: {
        name: "",
        budget_id: this.props.budget.id,
      },
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ==================================================
  // Methods
  // ==================================================
  handleUpdate(field) {
    return (event) => {
      this.setState({
        cell: Object.assign(this.state.cell, {
          [field]: event.target.value,
        })
      });
    }
  }

  handleSubmit(event) {
    this.props.addCell(this.state.cell);
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <div className="new-cells-container">
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

export default NewCellsView;
