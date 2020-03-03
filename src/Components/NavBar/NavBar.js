import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  NavBarWrapper, NavButton
} from './style';

class NavBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <NavButton selected={this.props.location.pathname === "/"} to="/">Comics</NavButton>
        <NavButton selected={this.props.location.pathname === "/settings"} to="/settings">Settings</NavButton>
        <NavButton selected={this.props.location.pathname === "/download"} to="/download">Download</NavButton>
      </NavBarWrapper>
    );
  }
}

export default withRouter(NavBar);