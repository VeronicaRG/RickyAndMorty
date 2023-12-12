import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { EpisodeWithImage } from '@components/EpisodeCard';
import { Character } from '@core-types/graphql';
import { DeepPartial } from '@core-types/global/utils';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  background-color: #443c3a;
  padding-top: ${({ theme }) => theme.safeArea.top + 20}px;
  padding-bottom: ${({ theme }) => theme.safeArea.bottom + 80}px;
`;

export const CharacterList = styled(FlatList<DeepPartial<Character>>).attrs({
  contentContainerStyle: { gap: 16, flexGrow: 1, paddingBottom: 12 },
})`
  max-height: 160px;
`;

export const EpisodeList = styled(FlatList<Partial<EpisodeWithImage>>).attrs({
  contentContainerStyle: { gap: 16, flexGrow: 1 },
})``;

export const Label = styled.Text`
  width: 100%;
  color: white;
  margin: 8px 0;
  font-size: 20px;
  font-weight: bold;
`;
