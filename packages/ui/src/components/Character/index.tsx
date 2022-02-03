import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: characterBounce;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  > :first-child {
    margin-bottom: 0.5rem;
  }
`;


const Name = styled.div`
`;
let counter = 0;

export interface ICharacterProps {
  name: string;
  characterImage: React.ReactNode;
  handleStatsDegration: () => void;
};

export const Character: FC<ICharacterProps> = ({
  name,
  characterImage,
  handleStatsDegration,
  ...restProps
}) => {

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Calling degration: ", counter);
      counter ++;
      handleStatsDegration();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledCharacter {...restProps}>
      <Name>{name}</Name>
      {characterImage}
    </StyledCharacter>
  );
};
