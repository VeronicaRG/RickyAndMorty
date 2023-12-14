import React, { useCallback } from 'react';
import * as S from './Characters.styles';
import { useCharactersScreen } from './Characters.logic';
import { CharacterCard } from '@components/CharacterCard';
import { ListRenderItem } from '@shopify/flash-list';
import { Character } from '@core-types/graphql/graphql';
import { CharactersListSkeleton } from './components/CharactersListSkeleton';

export const CharactersScreen: React.FC = () => {
  const { characters, handlePressCharacter, onCharactersListEndReached, hasMoreToLoad } =
    useCharactersScreen();

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
        testID="character-list"
        estimatedItemSize={200}
        renderItem={RenderCharacter}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={CharactersListSkeleton}
        ListFooterComponent={hasMoreToLoad ? <S.Loading /> : undefined}
        onEndReached={characters.length ? onCharactersListEndReached : undefined}
      />
    </S.Container>
  );
};
