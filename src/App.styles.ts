import { StatusBar as RNStatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: gray;
  margin-top: ${({ theme }) => theme.safeArea.top}px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const StatusBar = styled(RNStatusBar).attrs({
  translucent: true,
  barStyle: 'dark-content',
  backgroundColor: 'transparent',
})``;
