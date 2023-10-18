import { Typography } from '@mui/material';
import styled from 'styled-components';

export const SideCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoContainer = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;

export const SloganContainer = styled.div`
  margin-left: 20px;
  margin-top: 100px;
`;

export const SloganText = styled(Typography)`
  width: 300px;
  font-weight: 600;
`;
