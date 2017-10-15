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

class SideNav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          Menu Item 1
        </MenuItem>
        <MenuItem onTouchTap={this.props.toggleSideNav}>
          Menu Item 2
        </MenuItem>
        <MenuItem onTouchTap={this.props.toggleSideNav}>
          Menu Item 3
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
