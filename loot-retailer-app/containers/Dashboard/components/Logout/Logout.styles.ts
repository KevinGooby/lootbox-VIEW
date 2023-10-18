import { Typography } from '@/components/Typography';
import styled from 'styled-components';

export const Container = styled.div``;

export const Text = styled(Typography)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;
