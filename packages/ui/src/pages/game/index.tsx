import React, { useEffect, useState } from 'react';
import { gql, useMutation } from 'urql';

import { Porcu, BabyPorcu } from '../../assets';
import { CharacterComponent } from '../../components/Character';
import { BurgerComponent } from '../../components/Burger';
import { BallComponent } from '../../components/Ball';
import { SleepComponent } from '../../components/SleepScreen';
import { Screen } from '../../components/Screen';
import { Character } from '../../types';
import { Menu } from '../menu';
import { StatsDisp } from '../stats';
import { Stats } from '../../types';

const UPDATE_STATS = gql`
  mutation UpdateStats ($id: Int!, $age: Int!, $energy: Int!, $happiness: Int!, $health: Int!, $hunger: Int!) {
    updateStats(id: $id, age: $age, energy: $energy, happiness: $happiness, health: $health, hunger: $hunger) {
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

export interface IMenuProps {
  handleSetCharacter:  (newCharacter: any) => void;
  character: Character;
};

let mutStats: any = undefined;

export const Game: React.FC<IMenuProps> = ({
  character,
  handleSetCharacter
}) => {
  const [stats, setStats] = useState<Stats>({
    age: character.age,
    energy: character.energy,
    happiness: character.happiness,
    health: character.health,
    hunger: character.hunger,
  });

  useEffect(() => { mutStats = stats }, [stats]);

  const [statsVisible, setStatsVisible] = useState(false);
  const [eatAnimation, setEatAnimation] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [sleepAnimation, setSleepAnimation] = useState(false);

  const toggleStatsVisibility = () => {
    setStatsVisible(!statsVisible);
  };

  const [_stats, updateStats] = useMutation(UPDATE_STATS);

  useEffect(() => {
    setStats(currentStats => ({
      age: character.age,
      energy: character.energy,
      happiness: character.happiness,
      health: character.health,
      hunger: character.hunger,
    }))
    
  }, [character]);


  useEffect(() => {
    const interval = setInterval(() => {
      handleStatsDegration();
      console.log(stats);
      if ( mutStats.energy >= 50 && mutStats.happiness >= 50 && mutStats.health >= 50 && -10 <= mutStats.hunger && mutStats.hunger <= 0 ) {
        handleAgeCharacter();
        console.log("age", mutStats.age)
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);



  const playEatAnimation = () => {
    setEatAnimation(true)
    setTimeout(() => {
      setEatAnimation(false);
    }, 2000);
  };

  const playPlayAnimation = () => {
    setPlayAnimation(true)
    setTimeout(() => {
      setPlayAnimation(false);
    }, 1000);
  };

  const playSleepAnimation = () => {
    setSleepAnimation(true)
    setTimeout(() => {
      setSleepAnimation(false);
    }, 5000);
  };

  const handleBack = async () => {
    await updateStats({
      id: character.id, 
      age: stats.age,
      energy: stats.energy, 
      happiness: stats.happiness, 
      health: stats.health, 
      hunger: stats.hunger});
    handleSetCharacter( undefined );
  };

  const handleStatsDegration = () => {
    setStats(currentStats => ({
      age: currentStats.age,
      energy: currentStats.energy -2 ,
      happiness: currentStats.happiness - 1,
      health: currentStats.health - 1,
      hunger: currentStats.hunger + 2
    }));
  };

  const handleAgeCharacter = () => {
    console.log("before checked", stats.age)
    setStats(currentStats => ({
      age: currentStats.age + 1,
      energy: currentStats.energy,
      happiness: currentStats.happiness,
      health: currentStats.health,
      hunger: currentStats.hunger
    }));
      console.log("after setStats", stats.age)
  };

  const handleEat = () => {
    playEatAnimation();
    const newStats = {
      age: stats.age,
      energy: stats.energy + 3,
      happiness: stats.happiness + 1,
      health: stats.health + 1,
      hunger: stats.hunger - 5
    };
    setStats(newStats);
  };

  const handlePlay = () => {
    playPlayAnimation();
    const newStats = {
      age: stats.age,
      energy: stats.energy - 3,
      happiness: stats.happiness + 5,
      health: stats.health + 1,
      hunger: stats.hunger + 3
    };
    setStats(newStats);
  };

  const handleSleep = () => {
    playSleepAnimation();
    const newStats = {
      age: stats.age,
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
        name = { character.name }
        age = { stats.age }
      />
      <StatsDisp visible={ statsVisible } stats={ stats } ></StatsDisp>
      <Menu
        handleBack = { handleBack }
        toggleStatsVisibility= { toggleStatsVisibility }
        handleEat = { handleEat }
        handlePlay = { handlePlay }
        handleSleep = { handleSleep} >
      </Menu>
      {(eatAnimation) ? 
      <BurgerComponent/> : null}
      {(playAnimation) ? 
      <BallComponent/> : null}
      {(sleepAnimation) ? 
      <SleepComponent/> : null}
      </Screen>
  );
};
