import React, { useState } from 'react';
import { gql, useQuery } from 'urql';
import styled from 'styled-components';

import { Porcu, BabyPorcu, Frame, Burger, Cutlery, Heart } from '../../assets';
import { Character } from '../../components/Character';
import { Screen } from '../../components/Screen';
import { Menu } from '../../components/Menu';
import { Stats } from '../stats';

const query = gql`
  query GetCharacters {
    characters {
      name
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

export const Home: React.FC = () => {
  // TODO: proper types, maybe shared with backend
  const [result] = useQuery<{ characters: { name: string }[] }>({ query });
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
          <Character
            key={i}
            name={character.name}
            characterImage={<BabyPorcu />}
          />
        ))}
        <Stats visible={statsVisible}></Stats>
        <Menu
          toggleStatsVisibility= { toggleStatsVisibility }
          statImage={<Heart />}
          eatImage={<Cutlery />}
        />
      </Screen>
      <Frame />
    </StyledHome>
  );
};
