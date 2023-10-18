import * as Styled from './Sidebar.styles';
import { NAV_VALUES } from '../../constants';
import { Logout } from '../Logout';
import { useWindowResize } from '@/hooks/useWindowResize';
import { useRouter } from 'next/router';

export const Sidebar = () => {
  const { isTablet } = useWindowResize();
  const router = useRouter();

  return (
    <Styled.Container isTablet={isTablet}>
      <Styled.NavContainer>
        <Styled.Header variant="h4">LOOT</Styled.Header>
        <Styled.SubNavContainer>
          {NAV_VALUES.map((navValue) => {
            return (
              <Styled.Text
                variant="h6"
                key={navValue.name}
                onClick={() => router.push(navValue.route)}
              >
                {navValue.name}
              </Styled.Text>
            );
          })}
          <Logout />
        </Styled.SubNavContainer>
      </Styled.NavContainer>
    </Styled.Container>
  );
};
