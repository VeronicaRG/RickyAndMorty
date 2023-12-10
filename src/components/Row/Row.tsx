import styled from 'styled-components/native';

export const Row = styled.View<{ flexible: number | boolean }>`
  flex-direction: row;
  ${({ flexible }) => flexible && `flex: ${flexible && 1};`}
`;
