import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  justify-content: center;
  flex: 1;
`;

export const Image = styled(FastImage)`
  width: 100px;
  height: 100px;
  align-self: center;
  border-radius: 50px;
  border: 1px solid black;
  bottom: -12px;
  z-index: 2;
`;

export const InfoContainer = styled.View`
  flex: 1;
  min-height: 58px;
  background-color: #926f44;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0 12px;
  padding-top: 4px;
`;

export const Name = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
