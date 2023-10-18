import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import styled, { css } from 'styled-components';

export const CardContainer = styled(Card)<{
  isSelect: boolean;
  height?: string;
}>`
  border: ${({ isSelect }) => (isSelect ? '2px solid #3F51B5' : 'none')};
  min-width: 200px;
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
  overflow-y: scroll
`;

export const CardActionAreaContainer = styled(CardActionArea)``;

export const CardImage = styled(CardMedia)``;

export const CardContentContainer = styled(CardContent)``;
