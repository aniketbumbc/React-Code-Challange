import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderStyled = styled.div`
  animation: ${rotate360} 1s linear infinite;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
`;
