/**
*
* Button
*
*/
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
} from 'themes/variables';

const Button = styled.button`
  text-align: ${styledProps(textAlign, 'textAlign')};
  text-transform: ${styledProps(textTransform, 'textTransform')};
  font-family: ${styledProps(fontFamily, 'fontFamily')};
  vertical-align: ${styledProps(verticalAlign, 'verticalAlign')};
  font-style: ${styledProps(fontStyle, 'fontStyle')};
  font-weight: ${styledProps(fontWeight, 'fontWeight')};
  display: ${styledProps(display, 'display')};
  color: ${({ color }) => (color && color) || colors.primary[0]};
  line-height: ${({ lineHeight }) => (lineHeight && lineHeight) || '1.4em'};
  font-size: ${({ size }) => (size && size) || '1.2em'};
  letter-spacing: ${({ spacing }) => (spacing && spacing) || '1px'};
  margin: ${({ margin }) => (margin && margin) || '0'};
  padding: ${({ padding }) => (padding && padding) || '.7em 2.5em'};
  border-radius: ${({ radius }) => (radius && radius) || '3px'};
  border: ${({ border }) => (border && border) || `2px solid ${colors.primary[0]}`};
  -webkit-backface-visibility: hidden;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover,
  &:active {
    opacity: 0.7;
  }

  ${(props) => props.primary && `
    background-color: ${colors.primary[0]};
    border: none;
    color: ${colors.white[0]};
  `}

  ${(props) => props.outline && `
    border: 2px solid rgba(0,0,0,.3);
    color: ${colors.black[0]};
    &:hover,
    &:active {
      opacity: .8;
    }
  `}

  ${(props) => props.disabled && `
    border: 1px solid ${colors.black[0]};
    color: ${colors.white[0]};
    background: ${colors.black[0]};
    cursor: not-allowed;
    pointer-events: none;
    opacity: .2;
  `}
`;

Button.defaultProps = {
  fontFamily: 'fontPrimary',
  fontStyle: 'normal',
  display: 'block',
  fontWeight: 'semiBold',
  textTransform: 'uppercase',
  verticalAlign: 'baseline',
  textAlign: 'center',
};

export default Button;
