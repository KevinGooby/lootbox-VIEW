import { useRouter } from 'next/router';
import * as Styled from './MobileIntroScreen.styles';
import { ROUTES } from '@/constants/routing';
import { useContext } from 'react';
import { SignUpContext } from '../../context/SignUpContext';
import { SIGN_UP_FLOWS } from '../../constants';

export const MobileIntroScreen = () => {
  const router = useRouter();
  const { setFlow } = useContext(SignUpContext);

  return (
    <Styled.Container>
      <Styled.TitleText variant="h4">LOOT</Styled.TitleText>
      <Styled.TempContainer></Styled.TempContainer>
      <Styled.SloganText variant="body1">
        Insert a brief description or slogan about the product here.
      </Styled.SloganText>
      <Styled.ButtonContainer>
        <Styled.StyledButton
          handleClick={() => setFlow(SIGN_UP_FLOWS.YOUR_DETAILS)}
        >
          Join now
        </Styled.StyledButton>
        <Styled.StyledButton
          handleClick={() => router.push(ROUTES.LOGIN)}
          variant="outlined"
        >
          Login
        </Styled.StyledButton>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
