import React from 'react';
import styled from 'styled-components';
import { stats } from '../home'

const StyledStats = styled.div`
  position: absolute;
  width: 150px;
  height: 110px;
  display: flex;
  border: 3px solid #3c4141;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #cbd9db;
  font-color: #3c4141;
`;

export interface IStatsProps {
  visible: boolean;
  stats: stats;
}

export const Stats: React.FC<IStatsProps> = ({ visible, stats }) => {
  if (visible) {
    return (
      <StyledStats>
        Energy: {stats.energy} <br/>
        Happiness:  {stats.happiness}<br/>
        Health: {stats.health} <br/>
        Hunger: {stats.hunger}
      </StyledStats>
    )    
  } else
  return null
}
