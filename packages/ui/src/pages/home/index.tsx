import React, { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from 'urql';
import styled from 'styled-components';

import { Porcu, BabyPorcu, Frame, Burger, Cutlery, Heart, Ball, Sleep } from '../../assets';
import { Character } from '../../components/Character';
import { Screen } from '../../components/Screen';
import { Menu } from '../menu';
import { Stats } from '../stats';

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

  const [stats, setStats] = useState<stats>({
    energy: 10,
    happiness: 10,
    health: 1,
    hunger: 0,
  });

  useEffect(() => {
    if (character) {
      setStats(currentStats => ({
        energy: character.energy,
        happiness: character.happiness,
        health: character.health,
        hunger: character.hunger,
      }))
    }
  }, [character]);

  const [_, updateStats] = useMutation(UPDATE_STATS);

  const handleStatsDegration = () => {
    setStats(currentStats => ({
      energy: currentStats.energy -2 ,
      happiness: currentStats.happiness - 1,
      health: currentStats.health - 1,
      hunger: currentStats.hunger + 2
    }))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleStatsDegration();
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const handleEat = () => {
    const newStats = {
      energy: stats.energy + 3,
      happiness: stats.happiness + 1,
      health: stats.health - 1,
      hunger: stats.hunger - 5
    }
    if (character) {
      updateStats({
        id: character.id, 
        energy: newStats.energy, 
        happiness: newStats.happiness, 
        health: newStats.health, 
        hunger: newStats.hunger})
      setStats(newStats)
    }
  }
  const handlePlay = () => {
    const newStats = {
      energy: stats.energy - 3,
      happiness: stats.happiness + 5,
      health: stats.health + 1,
      hunger: stats.hunger + 3
    }
    if (character) {
      updateStats({
        id: character.id, 
        energy: newStats.energy, 
        happiness: newStats.happiness, 
        health: newStats.health, 
        hunger: newStats.hunger})
      setStats(newStats)
    }
  }
  const handleSleep = () => {
    const newStats = {
      energy: stats.energy + 5,
      happiness: stats.happiness + 3,
      health: stats.health + 1,
      hunger: stats.hunger + 3
    }
    if (character) {
      updateStats({
        id: character.id, 
        energy: newStats.energy, 
        happiness: newStats.happiness, 
        health: newStats.health, 
        hunger: newStats.hunger})
      setStats(newStats)
    }
  }

  const [statsVisible, setStatsVisible] = useState(false);
  const toggleStatsVisibility = () => {
    setStatsVisible(!statsVisible)
  }
  if (result.fetching) {
    return <>TODO: handle loading</>;
  }
  if (!result.data) {
    return <>TODO: handle no data</>;
  }
  return (
    <StyledHome>
      <Screen>
        {result.data.characters.map((character, i) => (
          console.log(character),
          <Character
            key={i}
            name={character.name}
            characterImage={<BabyPorcu />}
          />
        ))}
        <Stats visible={statsVisible} stats={stats}></Stats>
        <Menu
          toggleStatsVisibility= { toggleStatsVisibility }
          handleEat = {handleEat}
          handlePlay = {handlePlay}
          handleSleep = {handleSleep}
          statImage={<Heart />}
          eatImage={<Cutlery />}
          playImage={<Ball />}
          sleepImage={<Sleep />}
        />
      </Screen>
      <Frame />
    </StyledHome>
  );
};
