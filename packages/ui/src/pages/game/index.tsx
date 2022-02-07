import React, { useEffect, useState } from 'react';
import { gql, useMutation } from 'urql';

import { Porcu, BabyPorcu } from '../../assets';
import { CharacterComponent } from '../../components/Character';
import { BurgerComponent } from '../../components/Burger';
import { Screen } from '../../components/Screen';
import { Character } from '../../types';
import { Menu } from '../menu';
import { Stats } from '../stats';

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

export interface stats {
  energy: number;
  happiness: number;
  health: number;
  hunger: number;
};



export interface IMenuProps {
  handleSetCharacter:  (newCharacter: any) => void;
  character: Character;
};

export const Game: React.FC<IMenuProps> = ({
  character,
  handleSetCharacter
}) => {
  const [stats, setStats] = useState<stats>({
    energy: 10,
    happiness: 10,
    health: 10,
    hunger: 0,
  });

  const [statsVisible, setStatsVisible] = useState(false);
  const [eatAnimation, setEatAnimation] = useState(false)
  const toggleStatsVisibility = () => {
    setStatsVisible(!statsVisible)
  }

  const [_, updateStats] = useMutation(UPDATE_STATS);

  useEffect(() => {
    setStats(currentStats => ({
      energy: character.energy,
      happiness: character.happiness,
      health: character.health,
      hunger: character.hunger,
    }))
  }, [character]);


  useEffect(() => {
    const interval = setInterval(() => {
      handleStatsDegration();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const playEatAnimation = () => {
    setEatAnimation(true)
    setTimeout(() => {
      setEatAnimation(false);
    }, 2000);
  }

  const handleStatsDegration = () => {
    setStats(currentStats => ({
      energy: currentStats.energy -2 ,
      happiness: currentStats.happiness - 1,
      health: currentStats.health - 1,
      hunger: currentStats.hunger + 2
    }));
  };

  const handleBack = async () => {
    updateStats({
      id: character.id, 
      energy: stats.energy, 
      happiness: stats.happiness, 
      health: stats.health, 
      hunger: stats.hunger});
    handleSetCharacter( undefined );
  };

  const handleEat = () => {
    playEatAnimation();
    const newStats = {
      energy: stats.energy + 3,
      happiness: stats.happiness + 1,
      health: stats.health - 1,
      hunger: stats.hunger - 5
    };
    setStats(newStats);
  };

  const handlePlay = () => {
    const newStats = {
      energy: stats.energy - 3,
      happiness: stats.happiness + 5,
      health: stats.health + 1,
      hunger: stats.hunger + 3
    };
    setStats(newStats);
  };

  const handleSleep = () => {
    const newStats = {
      energy: stats.energy + 5,
      happiness: stats.happiness + 3,
      health: stats.health + 1,
      hunger: stats.hunger + 3
    };
    setStats(newStats);
  };
  
  return (
      <Screen>
      <CharacterComponent
        name={ character.name }
        characterImage={ <BabyPorcu />}
      />
      <Stats visible={statsVisible} stats={stats}></Stats>
      <Menu
        handleBack = { handleBack }
        toggleStatsVisibility= { toggleStatsVisibility }
        handleEat = { handleEat }
        handlePlay = { handlePlay }
        handleSleep = { handleSleep} ></Menu>
      {(eatAnimation) ? 
      <BurgerComponent/> : null}
      </Screen>
  );
};
