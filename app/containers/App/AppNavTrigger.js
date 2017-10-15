import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import styled from 'styled-components';
import { colors } from 'themes/variables';

const Button = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 10;
  cursor: pointer;
`;

class AppNavTrigger extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Button onClick={this.props.toggleSideNav}>
        <FontIcon
          className="material-icons"
          style={{
            color: colors.black[0],
          }}
        >
          menu
        </FontIcon>
      </Button>
    );
  }
}

AppNavTrigger.propTypes = {
  toggleSideNav: PropTypes.func,
};

export default AppNavTrigger;
