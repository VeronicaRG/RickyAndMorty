import styled from 'styled-components/native';

export const Space = styled.View<{ flex?: number }>`
  ${({ flex }) => flex && `flex: ${flex || 1};`}
`;
