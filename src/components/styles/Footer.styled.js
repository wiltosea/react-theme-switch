import styled from 'styled-components';
import * as theme from './Theme.styled';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.background};
  padding: 40px 20px;
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.background};
  }
`;
