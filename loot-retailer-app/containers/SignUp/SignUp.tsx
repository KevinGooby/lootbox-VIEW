import { Typography } from '@/components/Typography';
import { YourDetails } from './components/YourDetails';
import * as Styled from './Signup.styles';
import { SignUpSteps } from './components/SignUpSteps';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/routing';
import { SIGN_UP_FLOWS } from './constants';
import { BusinessDetails } from './components/BusinessDetails';
import { AddressDetails } from './components/AddressDetails';
import { useContext, useEffect } from 'react';
import { SignUpContext } from './context/SignUpContext';
import { LoyaltyDetails } from './components/LoyaltyDetails';
import { useWindowResize } from '@/hooks/useWindowResize';
import { MobileIntroScreen } from './components/MobileIntroScreen';
import { SignUpLoadingScreen } from './components/SignUpLoadingScreen';
import { SideCard } from '@/components/SideCard';

export const SignUp = () => {
  const router = useRouter();
  const { flow, setFlow, isLoading } = useContext(SignUpContext);

  const { isDesktop, isMobile } = useWindowResize();

  useEffect(() => {
    if (isMobile) {
      setFlow(null);
    } else {
      setFlow(SIGN_UP_FLOWS.YOUR_DETAILS);
    }
  }, [isMobile]);

  if (isMobile && !flow) {
    return <MobileIntroScreen />;
  }

  return (
    <Styled.Main>
      {!isMobile && !isLoading && <SideCard />}
      {!isLoading ? (
        <Styled.Container>
          {isMobile ? (
            <Styled.LoginContainer>
              <Styled.Header variant="h5" isMobile={isMobile}>
                Create Account
              </Styled.Header>
            </Styled.LoginContainer>
          ) : (
            <Styled.Header variant="h5">Create Account</Styled.Header>
          )}
          <Styled.FormContainer isMobile={isMobile}>
            <SignUpSteps currentFlow={flow!} />
            {flow === SIGN_UP_FLOWS.YOUR_DETAILS && <YourDetails />}
            {flow === SIGN_UP_FLOWS.BUSINESS_DETAILS && <BusinessDetails />}
            {flow === SIGN_UP_FLOWS.ADDRESS_DETAILS && <AddressDetails />}
            {flow === SIGN_UP_FLOWS.LOYALTY_DETAILS && <LoyaltyDetails />}
          </Styled.FormContainer>
          <Styled.LoginContainer>
            <Typography variant="body1">
              Already have an account?{' '}
              <Styled.LinkText
                variant="body1"
                onClick={() => router.push(ROUTES.LOGIN)}
              >
                Login
              </Styled.LinkText>
            </Typography>
          </Styled.LoginContainer>
        </Styled.Container>
      ) : (
        <SignUpLoadingScreen />
      )}
    </Styled.Main>
  );
};
