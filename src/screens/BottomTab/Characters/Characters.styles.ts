import { Character } from '@core-types/graphql/graphql';
import { FlashList } from '@shopify/flash-list';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #443c3a;
`;

export const ColumnSeparator = styled.View<{ position: 'left' | 'right' }>`
  flex: 1;
  ${({ position }) => position === 'left' && 'margin-right: 8px'}
  ${({ position }) => position === 'right' && 'margin-left: 8px'}
`;

export const CharacterList = styled(FlashList<Partial<Character>>).attrs(({ theme }) => {
  return {
    contentContainerStyle: {
      paddingTop: theme.safeArea.top,
      paddingBottom: theme.safeArea.bottom + Platform.select({ ios: 88, default: 108 }),
      paddingHorizontal: 16,
    },
  };
})``;
