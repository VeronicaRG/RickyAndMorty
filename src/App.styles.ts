import { StatusBar as RNStatusBar } from 'react-native';
import styled from 'styled-components/native';

export const StatusBar = styled(RNStatusBar).attrs({
  translucent: true,
  barStyle: 'light-content',
  backgroundColor: 'transparent',
})``;
