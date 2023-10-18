import styled from 'styled-components';
import { ButtonProps } from './Button.types';
import { Button as MuiButton } from '@mui/material';

//  width: ${({ width }) => (width ? `${width}px` : 'max-content')};
export const Button = styled(MuiButton)<ButtonProps>`
  padding: 10px;
  cursor: pointer;
  position: relative;
  min-height: max-content;
  border-radius: 8px;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  transition: 0.3s ease;
`;
