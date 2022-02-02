import React ,{useState} from 'react';
import styled from 'styled-components';

const StyledStats = styled.div`
  position: absolute;
  width: 150px;
  height: 100px;
  display: flex;
  border: 3px solid #000000;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #cbd9db;
`;

export interface IStatsProps {
  visible: boolean;
}

export const Stats: React.FC<IStatsProps> = ({ visible }) => {
  if (visible) {
    return (
      <StyledStats>
        Energy: 100% <br/>
        Hunger: 10%
      </StyledStats>
    )    
  } else
  return null
}
