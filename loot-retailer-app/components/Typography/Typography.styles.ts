import styled, { css } from 'styled-components';
import { TypographyProps } from './Typography.props';

export const StyledText = styled.div<TypographyProps>`
  margin: 0;
  padding: 0;
  font-family: 'Inter';
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  ${({ variant }) => {
    if (variant === 'h1') {
      return css`
        font-size: 96px;
        line-height: 112px;
      `;
    } else if (variant === 'h2') {
      return css`
        font-size: 60px;
        line-height: 72px;
      `;
    } else if (variant === 'h3') {
      return css`
        font-size: 48px;
        line-height: 56px;
      `;
    } else if (variant === 'h4') {
      return css`
        font-size: 34px;
        line-height: 40px;
      `;
    } else if (variant === 'h5') {
      return css`
        font-size: 28px;
        line-height: 28px;
      `;
    } else if (variant === 'h6') {
      return css`
        font-size: 20px;
        line-height: 24px;
      `;
    } else if (variant === 'body1') {
      return css`
        font-size: 16px;
        line-height: 24px;
      `;
    } else if (variant === 'body2') {
      return css`
        font-size: 14px;
        line-height: 20px;
      `;
    }
  }}
`;
