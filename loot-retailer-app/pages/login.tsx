import { SideCard } from '@/components/SideCard';
import { Login } from '@/containers/Login';
import { useWindowResize } from '@/hooks/useWindowResize';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const LoginPage = () => {
  const { isMobile } = useWindowResize();

  return (
    <Container>
      {!isMobile && <SideCard />}
      <Login />
    </Container>
  );
};

export default LoginPage;
