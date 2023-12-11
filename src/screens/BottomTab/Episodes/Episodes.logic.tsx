import { useLazyQuery } from '@apollo/client';
import { GET_EPISODES } from '@src/graphql/episode.graphql';
import { useCallback, useEffect, useRef, useState } from 'react';
import { EpisodeItem, SeasonDetails } from './Episodes.types';
import { isTruthy } from '@src/utils/validation/isTruthy';
import { getImageUrlFromImageData, getSeasonData, getSeasonsFromResults } from './Episodes.utils';

export const useEpisodesScreen = () => {
  const page = useRef(0);
  const [hasMoreToLoad, setHasMoreToLoad] = useState(false);
  const [episodes, setEpisodes] = useState<EpisodeItem[]>([]);

  const [getEpisodes] = useLazyQuery(GET_EPISODES, {
    onCompleted: async ({ episodes: fetchedEpisodes }) => {
      if (!fetchedEpisodes || !fetchedEpisodes.results) return;
      setHasMoreToLoad(Boolean(fetchedEpisodes.info?.next));
      const results = fetchedEpisodes?.results.filter(isTruthy);

      const seasonExternalData = await Promise.all(
        getSeasonsFromResults(results).map(seasonNumber => getSeasonData(seasonNumber)),
      ).then(seasonsDetails =>
        seasonsDetails.reduce(
          (acc, current) => ({ ...acc, [current.season_number]: current }),
          {} as { [key: number]: SeasonDetails },
        ),
      );

      const resultsWithImages = results.map(item => {
        return { ...item, image: getImageUrlFromImageData(seasonExternalData, item.episode!) };
      });

      if (page.current === 0) return setEpisodes(resultsWithImages);
      return setEpisodes(currentList => [...currentList, ...resultsWithImages]);
    },
  });

  const onEpisodesListEndReached = useCallback(() => {
    page.current += 1;
    getEpisodes({ variables: { page: page.current } });
  }, [getEpisodes]);

  useEffect(() => {
    getEpisodes({ variables: { page: page.current } });
  }, [getEpisodes]);

  return { episodes, hasMoreToLoad, onEpisodesListEndReached };
};
