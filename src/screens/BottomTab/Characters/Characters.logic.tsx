import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '@src/graphql/character.graphql';

export const useCharactersScreen = () => {
  const { data } = useQuery(GET_CHARACTERS, {
    variables: { filter: { species: 'Human' } },
  });

  return { data };
};
