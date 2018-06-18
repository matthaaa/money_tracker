import React from 'react';
import {Component} from 'react';


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
      <div>Welcome, {currentUser.first_name}!</div>
    );
  }

};

export default DashboardView;
