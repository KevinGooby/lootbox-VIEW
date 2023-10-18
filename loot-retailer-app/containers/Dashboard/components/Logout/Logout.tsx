import * as Styled from './Logout.styles';
import { useLogout } from './hooks/useLogout';

export const Logout = () => {
  const { isLoading, logout } = useLogout();

  return (
    <Styled.Container>
      <Styled.Text variant="h6" onClick={logout}>
        Logout
      </Styled.Text>
    </Styled.Container>
  );
};
