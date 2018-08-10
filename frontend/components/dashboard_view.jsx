import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
import MainHeaderContainer from './generic/main_header_container';


class DashboardView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      budget: {
        user_id: this.props.currentUser.id,
      },
    };
  }

  // ==================================================
  // Methods
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {currentUser} = this.props;

    return (
      <div>
        <MainHeaderContainer />
        <p>Welcome, {currentUser.first_name}!</p>
        <Link
          onClick={this.handleCreateBudget}
          to={`/budgets/new`}>
          New Budget
        </Link>
      </div>
    );
  }

};

export default DashboardView;
