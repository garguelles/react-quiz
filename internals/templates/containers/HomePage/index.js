/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { P, H1 } from 'components/Text';
import { Flex, Box } from 'grid-styled';
import ReactSVG from 'react-svg';
import logo from 'images/logo.svg';
import { SvgWrapper, Content } from './styles';

const Wrapper = styled(Flex)`
  height: 100vh;
  text-align: center;
`;

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Wrapper justify="center" column>
        <Box width={1 / 1} px="1em">
          <SvgWrapper>
            <ReactSVG path={logo} />
          </SvgWrapper>
          <Content>
            <H1 margin="10px 0 0 0" className="title">iStack Holdings</H1>
            <P margin="10px 0 15px 0">A React Boilerplate for Pro.</P>
          </Content>
        </Box>
      </Wrapper>
    );
  }
}
