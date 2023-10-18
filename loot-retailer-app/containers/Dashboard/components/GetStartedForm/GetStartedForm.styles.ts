import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Typography } from '@/components/Typography';
import styled from 'styled-components';

export const Container = styled.div``;

export const InputContainer = styled.div`
  width: 100%;
`;

export const MuiInput = styled(Input)`
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled(Typography)`
  margin-bottom: 20px;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  width: 150px;
  margin-bottom: 30px;
  height: 50px;
`;
