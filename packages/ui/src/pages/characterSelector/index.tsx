import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation, useQuery } from 'urql';

import { Screen } from '../../components/Screen';
import { NewCharacterForm } from '../newCharacterForm';

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

const ADD_CHARACTER = gql`
mutation AddCharacter ($name: String!, $description: String!) {
  addCharacter(name: $name, description: $description) {
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
  display: flex;
  bottom: 0;
  width: 100%;
  justify-content: space-evenly;
  overflow:hidden;
  position:relative;
  overflow:auto;
  height: 200px;
`;

const StyledList = styled.div`
  list-style:none;
  margin:0;
  padding:0;
`;

const StyledButton = styled.button`
  display: flex;
  margin:.25em;
  flex-direction: column;
  width: 150px;
  height: 72.5px;
  border: 2px solid #3c4141;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #cbd9db;
  cursor: pointer;
  font-size: 15px;
  .smaller { 
    font-size:70%;
  }

`;


export interface ICharacterSelectorProps {
  handleSetCharacter:  (newCharacter: any) => void;
};

export const CharacterSelector: React.FC<ICharacterSelectorProps> = ({
  handleSetCharacter
}) => {
  const [result, reexecuteQuery] = useQuery<{ characters: { 
    id: number,
    name: string,
    age: number,
    description: string,
    energy: number,
    happiness: number,
    health: number
    hunger: number
  }[] }>({ query: GET_ALL });

  const [newCharacterFormVisible, setNewCharacterFormVisible] = useState(false)
  const [_, addCharacter] = useMutation(ADD_CHARACTER);

  const toggleNewCharacterFormVisible = () => {
    setNewCharacterFormVisible(!newCharacterFormVisible)
  };

  console.log('result data:', result.data?.characters);
  const characters = result.data?.characters;

  if (result.fetching) {
    return (
    <Screen>Loading game...</Screen>);
  }
  if (!result.data) {
    return <>TODO: handle no data</>;
  }

  const handleAddCharacter = ({name, description}: any) => {
    console.log('handle add character:', name, description);
    toggleNewCharacterFormVisible();
    addCharacter({
      name: name,
      description: description
    });
    reexecuteQuery({ requestPolicy: 'network-only' });
  };
  return (
    <Screen>
      <StyledCharacterSelector>
        <StyledList>
          {characters && characters.map((character, i) => 
            <StyledButton key = {character.id} onClick={() => handleSetCharacter(character)}>{character.name} <br/> <div className='smaller'> {character.description}</div></StyledButton>)}
        <StyledButton onClick={toggleNewCharacterFormVisible}>New character</StyledButton>
        </StyledList>
      </StyledCharacterSelector>
      <NewCharacterForm toggleNewCharacterFormVisible = { toggleNewCharacterFormVisible } visible = {newCharacterFormVisible} handleAddCharacter={handleAddCharacter}/>
  </Screen>
  );
};