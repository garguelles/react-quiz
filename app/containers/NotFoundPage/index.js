/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { H2 } from 'components/Text';
import { MainWrapper, Content, Button, Logo } from './styles';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MainWrapper>
        <Content>
          <H2 margin="20px 0">Page not found!</H2>
          <Button to="/">Go back to homepage</Button>
        </Content>
      </MainWrapper>
    );
  }
}
