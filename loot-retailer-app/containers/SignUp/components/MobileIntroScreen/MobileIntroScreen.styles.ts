import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { theme } from '@/theme/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  padding: 20px;
`;

export const TitleText = styled(Typography)`
  margin-bottom: 20px;
`;

export const TempContainer = styled.div`
  background-color: ${theme.colors.primary};
  height: 200px;
  width: 100%;
`;

export const SloganText = styled(Typography)`
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
