import React from 'react';

import * as S from './EpisodeCard.styles';
import { EpisodeCardProps } from './EpisodeCard.types';
import { convertAirDateToDateString, formatDate } from '@src/utils/formatters';
import { i18n } from '@src/languages';
import { FavoriteIcon } from '@components/FavoriteIcon';

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode,
  isFavorite,
  handlePressFavorite,
}) => {
  const { id, name, image, air_date, episode: episodeName, characters = [] } = episode;

  return (
    <S.Card testID={`episode-${id}`}>
      <S.Image source={{ uri: image }} />
      <S.InfoContainer>
        <S.IconWrapper>
          <S.Label>{name}</S.Label>
          <FavoriteIcon
            widthIcon={20}
            heightIcon={20}
            isFavorite={isFavorite}
            testID={`episode-${id}-`}
            handlePressFavorite={handlePressFavorite}
          />
        </S.IconWrapper>
        <S.Property>{episodeName}</S.Property>
        <S.Property>
          {formatDate({
            date: convertAirDateToDateString(air_date),
            format: '[day] [month] [year]',
          })}
        </S.Property>
        <S.Property highlight>{i18n.t('EpisodeDetails:characters')}</S.Property>
        <S.WrapperCharacterImage>
          {characters.slice(0, 6).map(character => (
            <S.CharacterImage key={character?.id} source={{ uri: character?.image! }} />
          ))}
          {characters.length > 7 && <S.PlusIcon />}
        </S.WrapperCharacterImage>
      </S.InfoContainer>
    </S.Card>
  );
};
