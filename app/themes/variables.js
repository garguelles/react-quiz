import { css } from 'styled-components';

export const fontFamily = {
  fontPrimary: '"Open Sans", Arial, sans-serif',
  fontSecondary: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

export const colors = {
  primary: ['#6096BA', '#A3CEF1', '#274C77'],
  secondary: ['#B10F2E', '#CA2E55', '#DE7C5A'],
  black: ['#333333', '#222222', '#000000'],
  white: ['#FFFFFF', '#fafafa', '#f4f4f4'],
  gray: ['#BBBBBF', '#A3A9AA', '#8D8E8E'],
};

export const textAlign = {
  left: 'left',
  center: 'center',
  right: 'right',
};

export const fontStyle = {
  normal: 'normal',
  italic: 'italic',
  oblique: 'oblique',
};

export const textDecoration = {
  underline: 'underline',
  lineThrough: 'line-through',
  overline: 'overline',
  tdNone: 'none',
};

export const fontWeight = {
  extraThin: 100,
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  superBold: 900,
};

export const display = {
  block: 'block',
  inline: 'inline',
  inlineBlock: 'inline-block',
  flex: 'flex',
};

export const verticalAlign = {
  baseline: 'baseline',
  top: 'top',
  bottom: 'bottom',
  middle: 'middle',
  super: 'super',
  sub: 'sub',
};

export const textTransform = {
  initial: 'initial',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
};

/* -- do not edit below this line -- */

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

export function truncateMultiple(line, height, width) {
  return `
    height: ${height};
    width: ${width};
    -webkit-line-clamp: ${line};
    line-clamp: ${line};
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  `;
}

export const position = {
  centerX: 'left: 50%; transform: translate(-50%, 0);',
  centerY: 'top: 50%; transform: translate(0, -50%);',
  centerXY: 'top: 50%; left: 50%; transform: translate(-50%, -50%);',
  centerRemove: 'left: auto; top: auto; transform: translate(0, 0);',
};

// MEDIA QUERIES FOR MOBILE FIRST DEVELOPMENT
export const media1 = {
  // (599px) phone only
  phone: (...args) => css`
    @media (max-width: 37.4375em) {
      ${css(...args)}
    }
  `,
  // (600px) tablet portrait and above
  tabletP: (...args) => css`
    @media (min-width: 37.5em) {
      ${css(...args)}
    }
  `,
  // (900px) tablet landscape and above
  tabletL: (...args) => css`
    @media (min-width: 56.25em) {
      ${css(...args)}
    }
  `,
  // (1200px) desktop and above
  desktop: (...args) => css`
    @media (min-width: 75em) {
      ${css(...args)}
    }
  `,
  // (1800) big desktop and above
  dekstopBig: (...args) => css`
    @media (min-width: 112.5em) {
      ${css(...args)}
    }
  `,
};

// MEDIA QUERIES FOR DESKTOP FIRST DEVELOPMENT
export const media2 = {
  phone: (...args) => css`
    @media (max-width: 30em) {
      ${css(...args)}
    }
  `,
  tabletP: (...args) => css`
    @media (max-width: 37.5em) {
      ${css(...args)}
    }
  `,
  tabletL: (...args) => css`
    @media (max-width: 56.25em) {
      ${css(...args)}
    }
  `,
  laptop: (...args) => css`
    @media (max-width: 75em) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 112.5em) {
      ${css(...args)}
    }
  `,
};
