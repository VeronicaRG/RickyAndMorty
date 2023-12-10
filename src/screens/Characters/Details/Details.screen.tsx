import React, { Fragment } from 'react';

import { useCharacterDetailsScreen } from './Details.logic';
import * as S from './Details.styles';
import { Property } from './components/Property';
import { Icon } from '@components/Icon';
import { useTranslation } from 'react-i18next';

export const CharacterDetailsScreen: React.FC = ({}) => {
  const { t } = useTranslation('characterDetails');

  const { character, properties, handlePressGoBack } = useCharacterDetailsScreen();
  const { name, status, image: imageUrl } = character;

  return (
    <S.Container>
      <S.BackButton onPress={handlePressGoBack}>
        <Icon name="arrow-left" />
      </S.BackButton>
      <S.ScrollView>
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
