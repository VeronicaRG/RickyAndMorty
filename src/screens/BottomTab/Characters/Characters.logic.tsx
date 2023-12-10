import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '@src/graphql/character.graphql';
import { isTruthy } from '@src/utils/validation/isTruthy';
import { useMemo } from 'react';

export const useCharactersScreen = () => {
  const { data } = useQuery(GET_CHARACTERS, {
    variables: { filter: { species: 'Human' } },
  });

  const characters = useMemo(() => {
    if (!data || !data.characters?.results) return [];
    return data.characters.results.filter(isTruthy);
  }, [data]);

  return useMemo(() => ({ characters }), [characters]);
};
