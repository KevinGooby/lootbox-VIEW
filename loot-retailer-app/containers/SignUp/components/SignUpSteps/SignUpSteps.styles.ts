import styled, { css } from 'styled-components';

export const Container = styled.div<{ isTablet: boolean }>`
  display: flex;
  justify-content: space-between;
  width: ${(isTablet) => (isTablet ? '90%' : '60%')};
`;

export const Text = styled.span<{ isCurrentFlow: boolean }>`
  margin: 30px 0;
  margin-right: 10px;
  font-family: 'Inter';

  ${({ isCurrentFlow }) => {
    if (isCurrentFlow) {
      return css`
        color: #000;
        font-weight: bold;
      `;
    }

    return css`
      color: #ccc;
      font-weight: normal;
    `;
  }}
`;
