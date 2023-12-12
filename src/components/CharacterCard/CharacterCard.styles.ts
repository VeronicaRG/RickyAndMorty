import { Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity<{ horizontal?: boolean }>`
  justify-content: center;
`;

export const Image = styled(FastImage)`
  z-index: 2;
  width: 100px;
  height: 100px;
  bottom: -12px;
  align-self: center;
  border-radius: 50px;
  border: 1px solid black;
`;

export const InfoContainer = styled.View`
  max-width: ${Dimensions.get('window').width / 2 - 32}px;
  padding: 0 12px;
  min-height: 58px;
  padding-top: 4px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  justify-content: center;
  background-color: #926f44;
`;

export const Name = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
