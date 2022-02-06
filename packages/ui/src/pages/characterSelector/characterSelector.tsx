import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from 'urql';

import { Screen } from '../../components/Screen';
import { Frame } from '../../assets';

const GET_ALL = gql`
  query GetCharacters {
    characters {
      id
      name
      age
      description
      energy
      happiness
      health
      hunger
    }
  }
`;

const StyledCharacterSelector = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 202px;
  justify-content: space-evenly;
`;


export interface IMenuProps {
  handleSetCharacter:  (newCharacter: any) => void;
};

export const CharacterSelector: React.FC<IMenuProps> = ({
  handleSetCharacter
}) => {
  const [result] = useQuery<{ characters: { 
    id: number,
    name: string,
    age: number,
    description: string,
    energy: number,
    happiness: number,
    health: number
    hunger: number
  }[] }>({ query: GET_ALL });

  const character = result.data?.characters[0];

  useEffect(() => {
    handleSetCharacter(character)
  }, [character])

  if (result.fetching) {
    return (
    <Screen>Loading game...</Screen>)
    ;
  }
  if (!result.data) {
    return <>TODO: handle no data</>;
  }
  return (
    <StyledCharacterSelector>
      <Screen>
      </Screen>
    </StyledCharacterSelector>
  );
};