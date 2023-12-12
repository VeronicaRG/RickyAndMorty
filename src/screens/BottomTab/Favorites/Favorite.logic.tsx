import { useAppSelector } from '@src/hooks/redux';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { EpisodeItem } from '../Episodes/Episodes.types';
import { ArrayElement, DeepPartial } from '@core-types/global/utils';
import { addEpisode, removeEpisode } from '@src/redux/store/favorites';
import { useNavigation } from '@react-navigation/native';

export const useFavoriteScreen = () => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();
  const favoriteEpisodes = useAppSelector(state => state.favorites.episodes);
  const favoriteCharacters = useAppSelector(state => state.favorites.characters);
  const favoriteEpisodesIds = favoriteEpisodes.map(episode => episode.id);

  const handleToggleFavoriteEpisodes = useCallback(
    (selectedEpisode: DeepPartial<EpisodeItem>) =>
      dispatch(
        favoriteEpisodes.find(episode => episode.id === selectedEpisode.id)
          ? removeEpisode(selectedEpisode.id!)
          : addEpisode(selectedEpisode),
      ),
    [dispatch, favoriteEpisodes],
  );

  const handlePressCharacter = useCallback(
    (character: ArrayElement<typeof favoriteCharacters>) =>
      navigate('CharacterNavigator', { screen: 'Details', params: character }),
    [navigate],
  );

  const handlePressNavigationToCharacters = useCallback(
    () => navigate('BottomTabNavigator', { screen: 'Characters' }),
    [navigate],
  );

  const handlePressNavigationToEpisodes = useCallback(
    () => navigate('BottomTabNavigator', { screen: 'Episodes' }),
    [navigate],
  );

  return {
    favoriteCharacters,
    handlePressCharacter,
    handlePressNavigationToCharacters,
    favoriteEpisodes,
    favoriteEpisodesIds,
    handleToggleFavoriteEpisodes,
    handlePressNavigationToEpisodes,
  };
};
