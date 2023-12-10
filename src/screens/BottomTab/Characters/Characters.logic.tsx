import { useQuery } from '@apollo/client';
import { ArrayElement } from '@core-types/global/utils';
import { useNavigation } from '@react-navigation/native';
import { GET_CHARACTERS } from '@src/graphql/character.graphql';
import { isTruthy } from '@src/utils/validation/isTruthy';
import { useCallback, useMemo } from 'react';

export const useCharactersScreen = () => {
  const { navigate } = useNavigation();
  const { data } = useQuery(GET_CHARACTERS, {
    variables: { filter: { species: 'Human' } },
  });

  const characters = useMemo(() => {
    if (!data || !data.characters?.results) return [];
    return data.characters.results.filter(isTruthy);
  }, [data]);

  const handlePressCharacter = useCallback(
    (character: ArrayElement<typeof characters>) =>
      navigate('CharacterNavigator', { screen: 'Details', params: character }),
    [navigate],
  );

  return useMemo(() => ({ characters, handlePressCharacter }), [characters, handlePressCharacter]);
};
