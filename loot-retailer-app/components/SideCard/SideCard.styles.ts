import { Typography } from '@mui/material';
import styled from 'styled-components';
import bannerImage from "@/containers/Login/constants/qr-code.png"

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

export const ImageContainer = styled.div`
  max-width: 20px;
  margin: 5px;
`

export const LogoImage = styled.img`
  max-width: 20px;
  margin: 5px;
`
