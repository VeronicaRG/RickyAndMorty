import { useQuery } from '@apollo/client';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { GET_CHARACTER_DETAILS } from '@src/graphql/character.graphql';
import { CharactersNavigatorParams } from '@src/routes/navigators/Characters';
import { useCallback, useMemo } from 'react';
import { createListProperties } from './Details.utils';

export const useCharacterDetailsScreen = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<CharactersNavigatorParams, 'Details'>>();

  const { data } = useQuery(GET_CHARACTER_DETAILS, { variables: { characterId: params.id! } });

  const character = useMemo(() => data?.character || params, [params, data]);
  const properties = useMemo(() => createListProperties(character), [character]);

  const handlePressGoBack = useCallback(() => goBack(), [goBack]);

  return useMemo(
    () => ({ character, properties, handlePressGoBack }),
    [character, properties, handlePressGoBack],
  );
};
