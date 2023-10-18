import { ActionCard } from '@/components/ActionCard';
import { Button } from '@/components/Button';
import { Dropdown } from '@/components/Dropdown';
import { Input } from '@/components/Input';
import { RadioGroup } from '@/components/RadioGroup';
import { Typography } from '@/components/Typography';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ isTablet?: boolean }>`
  width: ${(isTablet) => (isTablet ? '90%' : '60%')};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: flex-end;
`;

export const CenterRowContainer = styled.div<{ isDesktop?: boolean }>`
  display: flex;
  gap: 15px;
  width: 100%;
  ${({ isDesktop }) =>
    !isDesktop &&
    css`
      justify-content: space-evenly;
      flex-wrap: wrap;
    `}
`;

export const ActionCardContainer = styled(ActionCard)`
  width: 100%;
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
  height: 50px;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const MuiInput = styled(Input)`
  width: 100%;
  margin-bottom: 30px;
`;

export const MuiDropdown = styled(Dropdown)`
  margin-bottom: 30px;
`;

export const MuiRadioGroup = styled(RadioGroup)`
  margin-bottom: 10px;
`;

export const AlertContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const TitleText = styled(Typography)`
  margin: 15px 0;
`;
