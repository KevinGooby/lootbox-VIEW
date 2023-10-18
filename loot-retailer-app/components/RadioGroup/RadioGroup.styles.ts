import { FormControlLabel, RadioGroup } from '@mui/material';
import styled from 'styled-components';

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const SelectedImage = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #000;
`;

export const RadioGroupContainer = styled(RadioGroup)`
  display: flex;
  justify-content: space-between;
`;

export const RadioContainer = styled(FormControlLabel)`
  display: block;
`;
