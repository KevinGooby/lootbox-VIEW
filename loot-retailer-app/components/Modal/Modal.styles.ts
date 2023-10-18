import styled from 'styled-components';
import { Button } from '../Button';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  place-items: center;
`;

export const Modal = styled.div`
  display: grid;
  grid: auto 1fr / 100%;
  gap: 16px;

  overflow: auto;

  max-width: 80%;
  max-height: 70%;
  padding: 0px 32px 32px 32px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;

  padding-top: 32px;

  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.white};

  & > h4 {
    font-weight: 400;
    margin: 0;
  }
`;

export const ExitButton = styled(Button)`
  display: inherit;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.black};
`;
