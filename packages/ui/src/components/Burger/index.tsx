import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Burger } from '../../assets';

const StyledBurger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: eatAnimation;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  }
`;

export const BurgerComponent: FC = () => {
  return (
    <StyledBurger>
      {< Burger />}
    </StyledBurger>
  );
};