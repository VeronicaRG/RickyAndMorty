import React, { Fragment } from 'react';

import { useCharacterDetailsScreen } from './Details.logic';
import * as S from './Details.styles';
import { Property } from './components/Property';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';

export const CharacterDetailsScreen: React.FC = ({}) => {
  const { t } = useTranslation('characterDetails');

  const { character, properties, isFavorite, handlePressGoBack, handleToggleFavorite } =
    useCharacterDetailsScreen();
  const { name, status, image: imageUrl } = character;

  return (
    <S.Container>
      <S.ScrollView>
        <Header
          isFavorite={isFavorite}
          handlePressGoBack={handlePressGoBack}
          handlePressFavorite={handleToggleFavorite}
        />
        {!!imageUrl && (
          <S.ImageWrapper status={status}>
            <S.Image source={{ uri: imageUrl }} />
            <S.StatusWrapper status={status}>
              <S.Status>
                {t('properties.value.status', { context: status?.toLowerCase() })}
              </S.Status>
            </S.StatusWrapper>
          </S.ImageWrapper>
        )}
        <S.Name>{name}</S.Name>
        {properties.map(({ title, data }) => (
          <Fragment key={title}>
            <S.PropertiesTitle>{title}</S.PropertiesTitle>
            {data.map(({ value, type, id }) => (
              <Property key={id} label={type} value={value!} />
            ))}
          </Fragment>
        ))}
      </S.ScrollView>
    </S.Container>
  );
};
