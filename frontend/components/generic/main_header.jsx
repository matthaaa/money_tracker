import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
import CustomButton from './buttons/custom_button';


class MainHeader extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleLogout() {
    this.props.logout();
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <header className="main-header-container">
        <CustomButton
          className={"logout-button"}
          text={"Log out"}
          onPress={this.handleLogout}
        />
      </header>
    );
  }

};

export default MainHeader;
