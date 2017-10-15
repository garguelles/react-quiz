import styled from 'styled-components';
import styledProps from 'styled-props';
import {
  colors,
  fontWeight,
  fontStyle,
  textTransform,
  display,
  verticalAlign,
  fontFamily,
  textAlign,
  textDecoration,
} from 'themes/variables';

export const P = styled.p`
  text-align: ${styledProps(textAlign)};
  text-transform: ${styledProps(textTransform, 'textTransform')};
  text-decoration: ${styledProps(textDecoration, 'textDecoration')};
  font-family: ${styledProps(fontFamily, 'fontFamily')};
  vertical-align: ${styledProps(verticalAlign, 'verticalAlign')};
  font-style: ${styledProps(fontStyle, 'fontStyle')};
  font-weight: ${styledProps(fontWeight, 'fontWeight')};
  display: ${styledProps(display, 'display')};
  color: ${({ color }) => color && color};
  line-height: ${({ lineHeight }) => (lineHeight && lineHeight) || '1.4em'};
  padding: ${({ padding }) => (padding && padding) || '0'};
  margin: ${({ margin }) => (margin && margin) || '0'};
  font-size: ${({ size }) => (size && size) || '1.4em'};
  letter-spacing: ${({ spacing }) => (spacing && spacing) || 'normal'};
`;

P.defaultProps = {
  fontFamily: 'fontPrimary',
  fontStyle: 'normal',
  display: 'block',
  fontWeight: 'regular',
  textTransform: 'initial',
  textDecoration: 'tdNone',
  verticalAlign: 'baseline',
};

export const H1 = P.withComponent('h1').extend`
  font-size: ${({ size }) => (size && size) || '3.5em'};
`;

export const H2 = P.withComponent('h2').extend`
  font-size: ${({ size }) => (size && size) || '3em'};
`;

export const H3 = P.withComponent('h3').extend`
  font-size: ${({ size }) => (size && size) || '2.5em'};
`;

export const H4 = P.withComponent('h4').extend`
  font-size: ${({ size }) => (size && size) || '2em'};
`;

export const H5 = P.withComponent('h5').extend`
  font-size: ${({ size }) => (size && size) || '1.6em'};
`;

export const H6 = P.withComponent('h6').extend`
  font-size: ${({ size }) => (size && size) || '1.2em'};
`;

export const A = P.withComponent('a').extend`
  font-size: ${({ size }) => (size && size) || '1.4em'};
  color: ${colors.primary[0]};

  &:focus, &:hover {
    text-decoration: underline;
  }
`;
