import { Typography } from '@/components/Typography';
import styled, { css } from 'styled-components';

export const Main = styled.div`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
`;

export const LinkText = styled(Typography)`
  color: #3f51b5;
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
`;

export const Header = styled(Typography)<{ isMobile?: boolean }>`
  ${({ isMobile }) =>
    isMobile
      ? css`
          margin-top: 25px;
        `
      : css`
          margin-top: 50px;
          margin-left: 50px;
        `}
`;

export const FormContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? '100%' : ' 70%;')};
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
