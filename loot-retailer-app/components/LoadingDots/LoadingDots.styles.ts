import styled, { keyframes } from 'styled-components';

const loadingFade = keyframes`
  0% {
    opacity: 0;
  }
  30% {
   opacity: 1;
  }
  60%,
  100% {
    opacity: 0;
  }
`;

export const LoadingState = styled.div<{ dotDiameter: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% - 1px);
  width: calc(100% - 1px);
  border-radius: inherit;
  background-color: inherit;
  color: inherit;
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
  & svg {
    width: ${({ dotDiameter }) => dotDiameter}px;
    height: auto;
    opacity: 0;
  }

  & #first-dot {
    animation: ${loadingFade} 1.5s infinite linear;
    animation-delay: 0s;
  }

  & #second-dot {
    animation: ${loadingFade} 1.5s infinite linear;
    animation-delay: 0.25s;
  }

  & #third-dot {
    animation: ${loadingFade} 1.5s infinite linear;
    animation-delay: 0.5s;
  }
`;
