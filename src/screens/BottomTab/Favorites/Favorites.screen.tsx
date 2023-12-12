import React, { useCallback } from 'react';
import * as S from './Favorites.styles';
import { EpisodeCard, EpisodeWithImage } from '@components/EpisodeCard';
import { useFavoriteScreen } from './Favorite.logic';
import { Character } from '@core-types/graphql';
import { CharacterCard } from '@components/CharacterCard';
import { useTranslation } from 'react-i18next';
import { DeepPartial } from '@apollo/client/utilities';
import { EmptyListButton } from './components/EmptyListButton';
import { FavoriteProps } from './Favorite.types';
import { ListRenderItem } from 'react-native';

export const FavoritesScreen: React.FC<FavoriteProps> = () => {
  const {
    favoriteEpisodes,
    favoriteCharacters,
    favoriteEpisodesIds,
    handlePressCharacter,
    handleToggleFavoriteEpisodes,
    handlePressNavigationToEpisodes,
    handlePressNavigationToCharacters,
  } = useFavoriteScreen();

  const { t } = useTranslation('favoriteScreen');

  const RenderEpisode: ListRenderItem<EpisodeWithImage> = useCallback(
    ({ item }) => (
      <EpisodeCard
        horizontal
        key={item?.id}
        episode={item}
        isFavorite={favoriteEpisodesIds.includes(item?.id)}
        handlePressFavorite={() => handleToggleFavoriteEpisodes(item)}
      />
    ),
    [handleToggleFavoriteEpisodes, favoriteEpisodesIds],
  );

  const RenderCharacter: ListRenderItem<DeepPartial<Character>> = useCallback(
    ({ item }) => (
      <CharacterCard
        horizontal
        key={item?.id}
        character={item}
        onPress={() => handlePressCharacter(item)}
      />
    ),
    [handlePressCharacter],
  );

  return (
    <S.Container>
      <S.Label>{t('favorite_characters.label')}</S.Label>
      <S.CharacterList
        horizontal
        bounces={false}
        data={favoriteCharacters}
        renderItem={RenderCharacter}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyListButton
            handleEmptyListButton={handlePressNavigationToCharacters}
            label={t('favorite_characters.empty_button_label')}
          />
        }
      />
      <S.Label>{t('favorite_episodes.label')}</S.Label>
      <S.EpisodeList
        horizontal
        bounces={false}
        data={favoriteEpisodes}
        renderItem={RenderEpisode}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyListButton
            handleEmptyListButton={handlePressNavigationToEpisodes}
            label={t('favorite_episodes.empty_button_label')}
          />
        }
      />
    </S.Container>
  );
};
