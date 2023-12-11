import { FlashList } from '@shopify/flash-list';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { EpisodeItem } from './Episodes.types';

export const Container = styled.View`
  flex: 1;
  background-color: #443c3a;
`;

export const EpisodeList = styled(FlashList<Partial<EpisodeItem>>).attrs(({ theme }) => {
  return {
    contentContainerStyle: {
      paddingHorizontal: 16,
      paddingTop: theme.safeArea.top,
      paddingBottom: theme.safeArea.bottom + Platform.select({ ios: 88, default: 108 }),
    },
  };
})``;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#FFFFFF',
  size: 'large',
})`
  margin: 24px;
  margin-top: 32px;
`;
