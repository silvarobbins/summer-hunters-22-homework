import React, { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from 'urql';
import styled from 'styled-components';

import { Porcu, BabyPorcu, Frame, Burger } from '../../assets';
import { Character } from '../../components/Character';
import { Screen } from '../../components/Screen';
import { Menu } from '../menu';
import { Stats } from '../stats';
import { Game } from '../game/game';

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

const UPDATE_STATS = gql`
  mutation UpdateStats ($id: Int!, $energy: Int!, $happiness: Int!, $health: Int!, $hunger: Int!) {
    updateStats(id: $id, energy: $energy, happiness: $happiness, health: $health, hunger: $hunger) {
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


const StyledHome = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5fbff;
`;


export interface stats {
  energy: number;
  happiness: number;
  health: number;
  hunger: number;
}

export const Home: React.FC = () => {
  // TODO: proper types, maybe shared with backend
  const [result] = useQuery<{ characters: { 
    id: number,
    name: string,
    age: number,
    description: string,
    energy: number,
    happiness: number,
    health: number
    hunger: number
  }[] }>({ query: GET_ALL });

  const character = result.data?.characters[0];

  if (result.fetching) {
    return <>TODO: handle loading</>;
  }
  if (!result.data) {
    return <>TODO: handle no data</>;
  }
  return (
    <StyledHome>
        <Game character={character}/>
      <Frame />
    </StyledHome>
  );
};
