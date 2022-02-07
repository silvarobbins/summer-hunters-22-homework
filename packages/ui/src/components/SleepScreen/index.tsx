import React, { FC } from 'react';
import styled from 'styled-components';

import { ZZZ } from '../../assets';

const StyledSleepScreen = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: auto;
  background-color: #000000;
`;

const StyledZZZ = styled.div`
  position: absolute;
  top: 60px;
  right: 60px;
  animation-name: sleepAnimation;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: 5;
  animation-timing-function: ease-in-out;
`;

export const SleepComponent: FC = () => {
  return (
  <StyledSleepScreen>
    <StyledZZZ>< ZZZ /></StyledZZZ>
  </StyledSleepScreen>);
};
