import { Row } from '@components/Row';
import styled from 'styled-components/native';

export const PropertyWrapper = styled.View`
  flex: 1;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: #926f44;
`;

export const PropertyDescriptionWrapper = styled.View`
  flex: 2;
  margin-left: 10px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: #926f4477;
`;

export const Property = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const PropertyDescription = styled.Text`
  color: #ffffff;
  font-size: 16px;
  padding: 0 16px;
  font-weight: bold;
`;

export const RowWrapper = styled(Row)`
  height: 32px;
  margin: 4px 16px;
  max-height: 32px;
`;

export const SkeletonContainer = styled.View`
  height: 32px;
  margin: 4px 16px;
  flex-direction: row;
`;
