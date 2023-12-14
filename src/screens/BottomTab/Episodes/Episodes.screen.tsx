import React, { useCallback } from 'react';
import * as S from './Episodes.styles';
import { useEpisodesScreen } from './Episodes.logic';
import { ListRenderItem } from '@shopify/flash-list';
import { EpisodeCard } from '@components/EpisodeCard';
import { EpisodeItem } from './Episodes.types';
import { EpisodesListSkeleton } from './components/EpisodesListSkeleton';

export const EpisodesScreen: React.FC = () => {
  const {
    episodes,
    hasMoreToLoad,
    favoriteEpisodesIds,
    handleToggleFavorite,
    onEpisodesListEndReached,
  } = useEpisodesScreen();

  const RenderEpisode: ListRenderItem<Partial<EpisodeItem>> = useCallback(
    ({ item }) => (
      <EpisodeCard
        key={item?.id}
        episode={item}
        isFavorite={favoriteEpisodesIds.includes(item?.id)}
        handlePressFavorite={() => handleToggleFavorite(item)}
      />
    ),
    [handleToggleFavorite, favoriteEpisodesIds],
  );

  return (
    <S.Container>
      <S.EpisodeList
        data={episodes}
        testID="episode-list"
        estimatedItemSize={200}
        renderItem={RenderEpisode}
        extraData={favoriteEpisodesIds}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EpisodesListSkeleton}
        ListFooterComponent={hasMoreToLoad ? <S.Loading /> : undefined}
        onEndReached={episodes.length ? onEpisodesListEndReached : undefined}
      />
    </S.Container>
  );
};
