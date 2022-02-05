import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 202px;
  justify-content: space-evenly;
`;

export interface IMenuProps {
  toggleStatsVisibility: () => void;
  handleEat: () => void;
  handlePlay: () => void;
  handleSleep: () => void;
  statImage: React.ReactNode;
  eatImage: React.ReactNode;
  playImage: React.ReactNode;
  sleepImage: React.ReactNode;
}

export const Menu: React.FC<IMenuProps> = ({
  toggleStatsVisibility,
  handleEat,
  handlePlay,
  handleSleep,
  statImage,
  eatImage,
  playImage,
  sleepImage,
}) => {
  return (
    <StyledMenu>
      <button id='statsButton' onClick={toggleStatsVisibility}>{statImage}</button>
      <button id='eatButton' onClick={handleEat}>{eatImage}</button>
      <button id='playButton' onClick={handlePlay}>{playImage}</button>
      <button id='playButton' onClick={handleSleep}>{sleepImage}</button>
    </StyledMenu>
  );
};

