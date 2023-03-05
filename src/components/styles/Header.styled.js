import styled from 'styled-components';
import * as theme from './Theme.styled';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;
