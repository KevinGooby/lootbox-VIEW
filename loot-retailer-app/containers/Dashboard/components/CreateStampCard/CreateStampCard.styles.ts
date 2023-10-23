import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.card};
  width: 350px;
  height: 139px;
  padding: 20px;
  border-radius: 8px;
`;

export const Header = styled(Typography)``;

export const ProgressBarContainer = styled.div`
  margin: 25px 0;
`;

export const StartButton = styled(Button)`
  width: 80px;
  height: 35px;
`;

export const HelperText = styled(Typography)`
  margin-top: 25px;
  width: 70%;
`;
