import * as Styled from './Login.styles';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './Login.types';
import { loginMap } from './constants';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/routing';
import { Typography } from '@/components/Typography';
import { useLogin } from './hooks/useLogin';
import { UserLoginPayload } from '@/types/user';
import { useWindowResize } from '@/hooks/useWindowResize';

export const Login = () => {
  const router = useRouter();
  const { isLoading, signIn } = useLogin();
  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      [loginMap.email]: '',
      [loginMap.password]: '',
    },
  });

  const isDisabled = !isValid;

  const payload = watch();
  const { isMobile, isTablet } = useWindowResize();

  return (
    <Styled.Container isMobile={isMobile}>
      {isMobile ? (
        <>
          <Styled.TitleText variant="h4">LOOT</Styled.TitleText>
          <Styled.TempContainer></Styled.TempContainer>
          <Styled.SloganText variant="body1">
            Insert a brief description or slogan about the product here.
          </Styled.SloganText>
        </>
      ) : (
        <Styled.Header variant="h5">Login</Styled.Header>
      )}
      <Styled.FormContainer>
        <Controller
          rules={{ required: true }}
          control={control}
          name={loginMap.email}
          render={({ field }) => {
            return (
              <Styled.InputContainer isMobile={isMobile} isTablet={isTablet}>
                <Styled.MuiInput
                  label="Email"
                  field={field}
                  InputLabelProps={{ shrink: true }}
                  hasError={!!errors[loginMap.email]}
                  errorMessage={errors[loginMap.email]?.message}
                />
              </Styled.InputContainer>
            );
          }}
        />
        <Controller
          rules={{ required: true }}
          control={control}
          name={loginMap.password}
          render={({ field }) => {
            return (
              <Styled.InputContainer isMobile={isMobile} isTablet={isTablet}>
                <Styled.MuiInput
                  label="Password"
                  field={field}
                  type="password"
                  InputLabelProps={{ shrink: true }}
                  hasError={!!errors[loginMap.password]}
                  errorMessage={errors[loginMap.password]?.message}
                />
              </Styled.InputContainer>
            );
          }}
        />
        <Styled.RowContainer isMobile={isMobile} isTablet={isTablet}>
          <Styled.StyledButton
            handleClick={() => signIn(payload as UserLoginPayload)}
            isDisabled={isDisabled}
          >
            Login
          </Styled.StyledButton>
        </Styled.RowContainer>
      </Styled.FormContainer>

      <Styled.LoginContainer>
        <Typography variant="body1">
          Don't have an account?{' '}
          <Styled.LinkText
            onClick={() => router.push(ROUTES.SIGNUP)}
            variant="body1"
          >
            Signup
          </Styled.LinkText>
        </Typography>
      </Styled.LoginContainer>
    </Styled.Container>
  );
};
