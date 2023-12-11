import { EpisodeItem, SeasonDetails } from './Episodes.types';
import { MOVIE_DB_TOKEN } from '@env';

export const getSeasonsFromResults = (results: EpisodeItem[]) => {
  return [...new Set(results.map(({ episode }) => Number.parseInt(episode!.substring(1, 3), 10)))];
};

export const getSeasonData = async (seasonNumber: number) => {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', Authorization: `Bearer ${MOVIE_DB_TOKEN}` },
  };

  return fetch(
    `https://api.themoviedb.org/3/tv/60625/season/${seasonNumber}?language=pt-BR`,
    options,
  ).then(response => response.json() as Promise<SeasonDetails>);
};

export const getImageUrlFromImageData = (
  seasonDetails: { [key: number]: SeasonDetails },
  episodeName: string,
) => {
  const season = Number.parseInt(episodeName!.substring(1, 3), 10);
  const episodeNumber = Number.parseInt(episodeName!.substring(4, 7), 10);
  if (!seasonDetails[season]) return undefined;
  const episodeData = seasonDetails[season]?.episodes.find(
    data => data.episode_number === episodeNumber,
  );
  return `https://image.tmdb.org/t/p/w500/${episodeData?.still_path}`;
};
