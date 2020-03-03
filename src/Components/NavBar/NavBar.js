import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  NavBarWrapper, NavButton
} from './style';

class NavBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <NavButton selected={this.props.location.pathname === "/comic-organizer"} to="/comic-organizer">Comics</NavButton>
        <NavButton selected={this.props.location.pathname === "/comic-organizer/settings"} to="/comic-organizer/settings">Settings</NavButton>
        <NavButton selected={this.props.location.pathname === "/comic-organizer/download"} to="/comic-organizer/download">Download</NavButton>
      </NavBarWrapper>
    );
  }
}

export default withRouter(NavBar);