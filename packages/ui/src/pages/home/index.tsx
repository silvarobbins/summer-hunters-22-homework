import React, { useState } from 'react';
import styled from 'styled-components';

import { Frame } from '../../assets';
import { Game } from '../game';
import { CharacterSelector } from '../characterSelector';
import { Character } from '../../types';
import { Instructions } from '../../components/Instructions';


const StyledHome = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5fbff;
`;



export const Home: React.FC = () => {
  // TODO: proper types, maybe shared with backend
  const [character, setCharacter] = useState<Character|undefined>(undefined)

  const handleSetCharacter = (newCharacter: Character) => {
    setCharacter(newCharacter)
  }
  console.log('active character:', character)

  if (!character) {
    return (
    <StyledHome>
    <Instructions/>
      <CharacterSelector 
        handleSetCharacter = { handleSetCharacter }/>
      <Frame />
    </StyledHome>)}
    
  return (
    <StyledHome>
    <Instructions/>
        <Game handleSetCharacter = { handleSetCharacter } character={ character }/>
      <Frame />
    </StyledHome>
  );
};
