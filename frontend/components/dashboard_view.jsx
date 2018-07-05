import React from 'react';
import {Component} from 'react';

// Components
import MainHeaderContainer from './generic/main_header_container';


class DashboardView extends Component {

  // ==================================================
  // Initialize
  // ==================================================

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
        <Link to="/budgets/new">New Budget</Link>
      </div>
    );
  }

};

export default DashboardView;
