import React, { FC } from 'react';
import styled from 'styled-components';

import { BabyPorcu, Porcu } from '../../assets';

const StyledCharacter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: characterBounce;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;


const Name = styled.div`
`;

export interface ICharacterProps {
  name: string;
  age: number;
};

export const CharacterComponent: FC<ICharacterProps> = ({
  name,
  age
}) => {
  const baby = age < 5;
  return (
    <StyledCharacter>
      <Name>{name}</Name>
      {(baby) ?
        <BabyPorcu/>: <Porcu/> 
      }
    </StyledCharacter>
  );
};
