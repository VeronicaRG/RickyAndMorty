import React from 'react';

import * as S from './EpisodeCard.styles';
import { EpisodeCardProps } from './EpisodeCard.types';
import { convertAirDateToDateString, formatDate } from '@src/utils/formatters';
import { i18n } from '@src/languages';
export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const { name, image, air_date, episode: episodeName, characters } = episode;

  return (
    <S.Card>
      <S.Image source={{ uri: image }} />
      <S.InfoContainer>
        <S.Label>{name}</S.Label>
        <S.Property>{episodeName}</S.Property>
        <S.Property>
          {formatDate({
            date: convertAirDateToDateString(air_date),
            format: '[day] [month] [year]',
          })}
        </S.Property>
        <S.Property highlight>{i18n.t('EpisodeDetails:characters')}</S.Property>
        <S.WrapperCharacterImage>
          {characters?.slice(0, 6).map(character => (
            <S.CharacterImage key={character?.id} source={{ uri: character?.image! }} />
          ))}
          <S.PlusIcon />
        </S.WrapperCharacterImage>
      </S.InfoContainer>
    </S.Card>
  );
};
