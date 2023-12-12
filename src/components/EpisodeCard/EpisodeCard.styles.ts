import { Icon } from '@components/Icon';
import { Row } from '@components/Row';
import { Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Card = styled.View<{ horizontal?: boolean }>`
  height: 140px;
  width: ${() => Dimensions.get('window').width - 32}px;
  background-color: #926f44;
  padding: 8px;
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: 10px;
  border: 1px solid black;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  border-radius: 10px;
  border: 1px solid black;
`;

export const InfoContainer = styled.View`
  flex: 1;
  margin: 0 6px;
`;

export const Label = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 1;
  color: white;
  margin-left: 4px;
  font-size: 12px;
  font-weight: bold;
`;

export const Property = styled.Text<{ highlight?: boolean }>`
  color: white;
  margin: 4px 0;
  font-size: 10px;
  ${({ highlight }) => highlight && 'fontWeight: bold'}
`;

export const WrapperCharacterImage = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CharacterImage = styled(FastImage)`
  width: 22px;
  height: 22px;
  margin-right: 4px;
  align-self: center;
  border-radius: 12px;
  border: 1px solid black;
`;

export const PlusIcon = styled(Icon).attrs({
  name: 'plus',
  width: 20,
  height: 20,
})`
  align-self: center;
`;

export const IconWrapper = styled(Row)`
  flex: 1;
  margin: 6px 0;
  align-items: center;
  justify-content: space-between;
`;
