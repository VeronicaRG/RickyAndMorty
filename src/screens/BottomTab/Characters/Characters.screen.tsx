import React from 'react';
import * as S from './Characters.styles';
import { useCharactersScreen } from './Characters.logic';

export const CharactersScreen: React.FC = () => {
  const { data } = useCharactersScreen();

  return (
    <S.Container>
      {data &&
        data.characters?.results?.map(character => (
          <S.CharacterName key={character?.id}>
            {character?.name}
          </S.CharacterName>
        ))}
    </S.Container>
  );
};
