/**
*
* SideNav
* See MUI Drawer props for further customization
* http://www.material-ui.com/#/components/drawer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

class SideNav extends React.PureComponent {
  render() {
    return (
      <Drawer
        docked={false}
        width={300}
        open={this.props.open}
        onRequestChange={this.props.toggleSideNav}
      >
        <AppBar
          title="SideNav Demo"
          onLeftIconButtonTouchTap={this.props.toggleSideNav}
        />
        <MenuItem onTouchTap={this.props.toggleSideNav}>
          <Link to={`${process.env.PUBLIC_PATH}`} style={{ display: 'block' }}>
            Home
          </Link>
        </MenuItem>
        <MenuItem onTouchTap={this.props.toggleSideNav}>
          <Link to={`${process.env.PUBLIC_PATH}about`} style={{ display: 'block' }}>
            About
          </Link>
        </MenuItem>
      </Drawer>
    );
  }
}

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleSideNav: PropTypes.func.isRequired,
};

export default SideNav;
