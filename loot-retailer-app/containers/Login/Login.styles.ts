import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Typography } from '@/components/Typography';
import { theme } from '@/theme/theme';
import styled, { css } from 'styled-components';

export const Header = styled(Typography)`
  margin-top: 50px;
  margin-left: 50px;
`;

export const Container = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  ${({ isMobile }) =>
    isMobile &&
    css`
      padding: 20px;
    `}
`;

export const RowContainer = styled.div<{
  isMobile?: boolean;
  isTablet?: boolean;
}>`
  display: flex;
  width: ${({ isMobile, isTablet }) => {
    if (isMobile) {
      return `100%`;
    }

    if (isTablet) {
      return `90%`;
    }

    return `60%`;
  }};
  justify-content: flex-end;
`;

export const ErrorText = styled.div`
  color: #cc2727;
  margin: 0px;
  font-size: 14px;
  padding-left: 16px;
`;

export const ErrorBox = styled.div`
  background-color: #ecabab;
  padding: 30px;
  border-radius: 20px;
  width: 550px;
  text-align: center;
  margin: 25px 10px;
`;

export const StyledButton = styled(Button)`
  width: 150px;
  margin-bottom: 30px;
`;

export const InputContainer = styled.div<{
  isMobile?: boolean;
  isTablet?: boolean;
}>`
  width: ${({ isMobile, isTablet }) => {
    if (isMobile) {
      return `100%`;
    }

    if (isTablet) {
      return `90%`;
    }

    return `60%`;
  }};
`;

export const MuiInput = styled(Input)`
  width: 100%;
  margin-bottom: 30px;
`;

export const LinkText = styled(Typography)`
  color: #3f51b5;
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
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
`;
