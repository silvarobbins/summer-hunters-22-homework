import React, { useEffect, useState } from 'react';
import { gql, useQuery } from 'urql';
import styled from 'styled-components';

import { Porcu, BabyPorcu, Frame, Burger, Cutlery, Heart, Ball, Sleep } from '../../assets';
import { Character } from '../../components/Character';
import { Screen } from '../../components/Screen';
import { Menu } from '../Menu';
import { Stats } from '../stats';

const query = gql`
  query GetCharacters {
    characters {
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
    name: string,
    age: number,
    description: string,
    energy: number,
    happiness: number,
    health: number
    hunger: number
  }[] }>({ query });

  const character = result.data?.characters[0]

  const [stats, setStats] = useState<stats>({
    energy: 0,
    happiness: 0,
    health: 0,
    hunger: 0,
  })

  useEffect(() => {
    if (character !== undefined) {
      setStats(currentStats => ({
        energy: character.energy,
        happiness: character.happiness,
        health: character.health,
        hunger: character.hunger,
      }))
    }
  }, [character]);


  const handleStatsDegration = () => {
    setStats(currentStats => ({
      energy: currentStats.energy -2 ,
      happiness: currentStats.happiness - 1,
      health: currentStats.health - 1,
      hunger: currentStats.hunger - 2
    }))
  }
  const handleEat = () => {
    const newStats = {
      energy: stats.energy + 3,
      happiness: stats.happiness + 1,
      health: stats.health - 1,
      hunger: stats.hunger + 5
    }
    setStats(newStats)
  }
  const handlePlay = () => {
    const newStats = {
      energy: stats.energy - 3,
      happiness: stats.happiness + 5,
      health: stats.health + 1,
      hunger: stats.hunger - 3
    }
    setStats(newStats)
  }
  const handleSleep = () => {
    const newStats = {
      energy: stats.energy + 5,
      happiness: stats.happiness + 3,
      health: stats.health + 1,
      hunger: stats.hunger - 3
    }
    setStats(newStats)
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
            handleStatsDegration={handleStatsDegration}
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
