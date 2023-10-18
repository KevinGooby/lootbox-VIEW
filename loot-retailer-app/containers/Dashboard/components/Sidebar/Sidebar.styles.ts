import { theme } from '@/theme/theme';
import styled from 'styled-components';
import { SIDE_WIDTH } from '../../constants';
import { Typography } from '@/components/Typography';

export const Container = styled.div<{ isTablet: boolean }>`
  width: ${({ isTablet }) => {
    if (isTablet) {
      return '30%';
    } else {
      return SIDE_WIDTH;
    }
  }};
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  background-color: ${theme.colors.primary};
`;

export const Header = styled(Typography)`
  color: ${theme.colors.accent};
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SubNavContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 70%;
`;

export const Text = styled(Typography)`
  color: ${theme.colors.white};
  cursor: pointer;
`;
