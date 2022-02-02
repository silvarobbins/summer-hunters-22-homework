import React from 'react';
import styled from 'styled-components';
import { Stats } from '../../pages/stats';

const StyledMenu = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 202px;
  justify-content: space-evenly;
`;

export interface IMenuProps {
  toggleStatsVisibility: ()=>void;
  statImage: React.ReactNode;
  eatImage: React.ReactNode;
}

export const Menu: React.FC<IMenuProps> = ({
  toggleStatsVisibility,
  statImage,
  eatImage
}) => {
  return (
    <StyledMenu>
      <button id='statsButton' onClick={toggleStatsVisibility}>{statImage}</button>
      <button id='eatButton' >{eatImage}</button>
    </StyledMenu>
  );
};

