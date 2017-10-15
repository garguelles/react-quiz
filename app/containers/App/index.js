/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { themes } from 'themes/theme';
import SideNav from 'components/SideNav';
import ogImg from 'images/logo.png';
import {
  toggleSideNav,
} from 'common/actions';
import {
  makeSelectApp,
} from './selectors';
import AppNavTrigger from './AppNavTrigger';

injectTapEventPlugin();

const muiTheme = getMuiTheme(themes.muiTheme);

class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    app: PropTypes.object,
    toggleSideNav: PropTypes.func,
  };

  render() {
    return (
      <ThemeProvider theme={themes.theme}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <main>
            <Helmet>
              <title>iStack Holdings React Boilerplate Starter</title>
              <meta
                name="description"
                content="React boilerplate for iStack sites"
              />
              <meta property="og:title" content="iStack Holdings" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="REPLACE" />
              <meta property="og:description" content="REPLACE" />
              <meta property="og:img" content={ogImg} />
            </Helmet>
            {React.Children.toArray(this.props.children)}
          </main>
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp,
});

function mapDispatchToProps(dispatch) {
  return {
    toggleSideNav: () => dispatch(toggleSideNav()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
