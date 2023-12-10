import React, { useCallback } from 'react';
import * as S from './Characters.styles';
import { useCharactersScreen } from './Characters.logic';
import { CharacterCard } from '@components/CharacterCard';
import { ListRenderItem } from '@shopify/flash-list';
import { Character } from '@core-types/graphql/graphql';

export const CharactersScreen: React.FC = () => {
  const { characters, handlePressCharacter } = useCharactersScreen();

  const RenderCharacter: ListRenderItem<Partial<Character>> = useCallback(
    ({ index, item }) => (
      <S.ColumnSeparator position={index % 2 === 0 ? 'left' : 'right'}>
        <CharacterCard key={item?.id} character={item} onPress={() => handlePressCharacter(item)} />
      </S.ColumnSeparator>
    ),
    [handlePressCharacter],
  );

  return (
    <S.Container>
      <S.CharacterList
        numColumns={2}
        data={characters}
        estimatedItemSize={200}
        renderItem={RenderCharacter}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};
