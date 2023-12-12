import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => Platform.select({ ios: 0, default: theme.safeArea.top })}px;
`;

export const HeaderOption = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  justify-content: center;
`;
