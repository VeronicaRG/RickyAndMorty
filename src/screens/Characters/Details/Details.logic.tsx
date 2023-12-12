import { useQuery } from '@apollo/client';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { GET_CHARACTER_DETAILS } from '@src/graphql/character.graphql';
import { CharactersNavigatorParams } from '@src/routes/navigators/Characters';
import { useCallback, useMemo } from 'react';
import { createListProperties } from './Details.utils';
import { useAppSelector } from '@src/hooks/redux';
import { useDispatch } from 'react-redux';
import { addCharacter, removeCharacter } from '@src/redux/store/favorites';

export const useCharacterDetailsScreen = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<CharactersNavigatorParams, 'Details'>>();

  const dispatch = useDispatch();
  const favoriteCharacter = useAppSelector(state => state.favorites.characters);

  const isFavorite = useMemo(
    () => !!favoriteCharacter.find(character => character.id === params.id),
    [favoriteCharacter, params],
  );

  const { data } = useQuery(GET_CHARACTER_DETAILS, { variables: { characterId: params.id! } });

  const character = useMemo(() => data?.character || params, [params, data]);
  const properties = useMemo(() => createListProperties(character), [character]);

  const handlePressGoBack = useCallback(() => goBack(), [goBack]);

  const handleToggleFavorite = useCallback(
    () => dispatch(isFavorite ? removeCharacter(character.id!) : addCharacter(character)),
    [character, dispatch, isFavorite],
  );

  return { character, properties, handlePressGoBack, isFavorite, handleToggleFavorite };
};
