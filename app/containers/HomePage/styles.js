import styled, { keyframes } from 'styled-components';

const rotate1 = keyframes`
  0% {
    transform: rotateY(90deg);
    transform-origin: bottom right 0;
  }
  100% {
    transform: rotateY(0deg);
    transform-origin: bottom right 0;
  }
`;

const rotate2 = keyframes`
  0% {
    transform: rotateY(90deg);
    transform-origin: left bottom 0;
  }
  100% {
    transform: rotateY(0deg);
    transform-origin: left bottom 0;
  }
`;

const rotate3 = keyframes`
  0% {
    transform: rotateY(90deg);
    transform-origin: top right 0;
  }
  100% {
    transform: rotateY(0deg);
    transform-origin: top right 0;
  }
`;

const rotate4 = keyframes`
  0% {
    transform: rotateY(90deg);
    transform-origin: bottom left 0;
  }
  100% {
    transform: rotateY(0deg);
    transform-origin: bottom left 0;
  }
`;

const opacity = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

export const SvgWrapper = styled.div`
  margin: auto;
  position: relative;
  width: 200px;
  height: 250px;

  svg {
    width: 200px;
    height: 250px;
  }
  .cls-1 {
      transform: rotateY(90deg);
      animation: ${rotate4} 1s linear forwards;
  }
  .cls-3 {
    transform: rotateY(90deg);
    animation: ${rotate1} 1s linear forwards;
  }
  .cls-2{
    opacity: 0;
    animation: ${opacity} .3s 1.5s linear forwards;
  }
  .cls-5 {
    opacity: 0;
    animation: ${opacity} .3s 1.5s linear forwards;
  }
  .cls-4 {
    transform: rotateY(90deg);
    animation: ${rotate3} 1s 1s linear forwards;
  }
  .cls-6 {
    transform: rotateY(90deg);
    animation: ${rotate2} 1s 1s linear forwards;
  }
`;

export const Content = styled.div`
  opacity: 0;
  visibility: hidden;
  animation: ${opacity} .5s 2.3s linear forwards;
`;
