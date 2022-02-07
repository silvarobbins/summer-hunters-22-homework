import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Ball } from '../../assets';

const StyledBall = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: playAnimation;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-timing-function: linear;

  > :first-child {
    margin-bottom: 0.5rem;
  }
`;

export const BallComponent: FC = () => {
  return (
    <StyledBall>
      {< Ball />}
    </StyledBall>
  );
};