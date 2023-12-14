import { useLazyQuery } from '@apollo/client';
import { ArrayElement } from '@core-types/global/utils';
import { useNavigation } from '@react-navigation/native';
import { GET_CHARACTERS } from '@src/graphql/character.graphql';
import { isTruthy } from '@src/utils/validation/isTruthy';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CharacterItem } from './Characters.types';

export const useCharactersScreen = () => {
  const page = useRef(1);

  const [hasMoreToLoad, setHasMoreToLoad] = useState(false);
  const [characters, setCharacters] = useState<CharacterItem[]>([]);

  const { navigate } = useNavigation();

  const [getCharacters] = useLazyQuery(GET_CHARACTERS, {
    onCompleted: ({ characters: fetchedCharacters }) => {
      if (!fetchedCharacters || !fetchedCharacters.results) return;
      setHasMoreToLoad(Boolean(fetchedCharacters.info?.next));
      const results = fetchedCharacters?.results.filter(isTruthy);
      if (page.current === 1) return setCharacters(results);
      return setCharacters(currentList => [...currentList, ...results]);
    },
  });

  const handlePressCharacter = useCallback(
    (character: ArrayElement<typeof characters>) =>
      navigate('CharacterNavigator', { screen: 'Details', params: character }),
    [navigate],
  );

  const onCharactersListEndReached = useCallback(() => {
    page.current += 1;
    getCharacters({ variables: { page: page.current } });
  }, [getCharacters]);

  useEffect(() => {
    getCharacters({ variables: { page: page.current } });
  }, [getCharacters]);

  return { characters, hasMoreToLoad, handlePressCharacter, onCharactersListEndReached };
};
