import React from 'react';
import styled from 'styled-components';
import { Stats } from '../../types';

const StyledStats = styled.div`
  position: absolute;
  width: 150px;
  height: 130px;
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
  stats: Stats;
}

export const StatsDisp: React.FC<IStatsProps> = ({ 
  visible, 
  stats
}) => {
  if (visible) {
    return (
      <StyledStats>
        Age: {stats.age} <br/>
        Energy: {stats.energy} <br/>
        Happiness:  {stats.happiness}<br/>
        Health: {stats.health} <br/>
        Hunger: {stats.hunger}
      </StyledStats>
    )    
  } else
  return null
}
