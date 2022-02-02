import React ,{useState} from 'react';
import styled from 'styled-components';
import { stats } from '../home';

const StyledStats = styled.div`
  position: absolute;
  width: 150px;
  height: 110px;
  display: flex;
  border: 3px solid #000000;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #cbd9db;
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
      </StyledStats>
    )    
  } else
  return null
}
