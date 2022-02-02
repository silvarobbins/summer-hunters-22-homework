import React, { FC } from 'react';
import styled from 'styled-components';

const StyledScreen = styled.div`
  position: absolute;
  height: 210px;
  width: 202px;
  top: 65px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
`;

export interface IScreenProps {}

export const Screen: FC<IScreenProps> = ({ ...restProps }) => {
  return <StyledScreen {...restProps}></StyledScreen>;
};
