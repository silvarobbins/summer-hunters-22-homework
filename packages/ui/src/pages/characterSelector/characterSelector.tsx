import React from 'react';
import styled from 'styled-components';
import { Screen } from '../../components/Screen';
import { Frame } from '../../assets';

const StyledCharacterSelect = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 202px;
  justify-content: space-evenly;
`;

export const CharacterSelect: React.FC = () => {
  return (
    <StyledCharacterSelect>
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
          handleSaveStats = { handleSaveStats }
          toggleStatsVisibility= { toggleStatsVisibility }
          handleEat = {handleEat}
          handlePlay = {handlePlay}
          handleSleep = {handleSleep}
        />
      </Screen>
      <Frame />
    </StyledHome>
  );
};