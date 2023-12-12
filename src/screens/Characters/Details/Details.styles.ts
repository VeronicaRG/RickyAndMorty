import { Maybe } from '@core-types/graphql';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

const statusColor = ({ status }: { status?: Maybe<string> }) => {
  switch (status) {
    case 'Alive':
      return '#5acd90';
    case 'Dead':
      return 'red';
    default:
      return 'black';
  }
};

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background-color: #443c3a;
`;

export const ScrollView = styled.ScrollView.attrs(({ theme }) => {
  return {
    contentContainerStyle: {
      flexGrow: 1,
      alignItems: 'center',
      paddingBottom: theme.safeArea.bottom,
    },
  };
})``;

export const ImageWrapper = styled.View<{ status?: Maybe<string> }>`
  width: 200px;
  height: 200px;
  align-items: center;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 100px;
  justify-content: center;
  background-color: ${statusColor};
`;

export const Image = styled(FastImage)`
  width: 190px;
  height: 190px;
  align-items: center;
  border-radius: 95px;
`;

export const StatusWrapper = styled.View<{ status?: Maybe<string> }>`
  bottom: -10px;
  padding: 6px 8px;
  position: absolute;
  border-radius: 6px;
  background-color: ${statusColor};
`;

export const Status = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Name = styled.Text`
  color: #ffffff;
  font-size: 26px;
  margin-top: 16px;
  font-weight: bold;
  text-align: center;
`;

export const PropertiesTitle = styled.Text`
  color: #ffffff;
  margin: 16px 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
