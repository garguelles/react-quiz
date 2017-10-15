import styled from 'styled-components';
import { Link } from 'react-router';
import LogoImg from 'images/logo.png';
import { colors, position } from 'themes/variables';
import bg from './bg-404.jpg';

export const MainWrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${colors.black[0]} url(${bg}) center;
  background-size: cover;
  color: ${colors.white[0]};
`;

export const Content = styled.div`
  position: absolute;
  ${position.centerXY};
  text-align: center;
`;

export const Button = styled(Link)`
  padding: .8em 2em;
  color: ${colors.white[0]};
  display: inline-block;
  background: ${colors.primary[0]};
  font-size: 1.2em;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: .15em;
`;

export const Logo = styled.img.attrs({
  src: LogoImg,
  alt: 'logo',
})`
  max-width: 80px;
  display: block;
  margin: 0 auto;
`;
