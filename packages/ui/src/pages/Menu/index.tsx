import React from 'react';
import styled from 'styled-components';
import { Burger, Cutlery, Heart, Ball, Sleep, LeftArrow } from '../../assets';

const StyledMenu = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 202px;
  justify-content: space-evenly;
`;

export interface IMenuProps {
  handleBack: () => void;
  toggleStatsVisibility: () => void;
  handleEat: () => void;
  handlePlay: () => void;
  handleSleep: () => void;
}

export const Menu: React.FC<IMenuProps> = ({
  handleBack,
  toggleStatsVisibility,
  handleEat,
  handlePlay,
  handleSleep,
}) => {
  return (
    <StyledMenu>
      <button id='backButton' onClick={handleBack}><LeftArrow /></button>
      <button id='statsButton' onClick={toggleStatsVisibility}><Heart /></button>
      <button id='eatButton' onClick={handleEat}><Cutlery /></button>
      <button id='playButton' onClick={handlePlay}><Ball /></button>
      <button id='playButton' onClick={handleSleep}><Sleep /></button>
    </StyledMenu>
  );
};

