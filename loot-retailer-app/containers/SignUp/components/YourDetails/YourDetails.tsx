import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '@/containers/SignUp/SignUp.types';
import { YourDetailsType, signUpMap } from '@/containers/SignUp/constants';
import * as Styled from '@/containers/SignUp/styles/SignupDetails.styles';
import { yourDetailsProps } from './YourDetails.props';
import { useContext, useState } from 'react';
import { SignUpContext } from '../../context/SignUpContext';
import { Alert } from '@/components/Alert';
import { useWindowResize } from '@/hooks/useWindowResize';

export const YourDetails = ({}: yourDetailsProps) => {
  const { onNextClick, setYourDetails, yourDetails } =
    useContext(SignUpContext);

  const [passwordMatched, setPasswordMatched] = useState(true);

  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      [signUpMap.firstName]: yourDetails.firstName,
      [signUpMap.lastName]: yourDetails.lastName,
      [signUpMap.email]: yourDetails.email,
      [signUpMap.password]: yourDetails.password,
      [signUpMap.confirmPassword]: yourDetails.confirmPassword,
    },
  });
  const isDisabled = !isValid;

  const payload = watch();
  const { isTablet } = useWindowResize();

  return (
    <Styled.Container isTablet={isTablet}>
      {!passwordMatched && (
        <Styled.AlertContainer>
          <Alert
            variant="error"
            outlineVariant="outlined"
            text="Passwords do not match"
          />
        </Styled.AlertContainer>
      )}
      <Styled.RowContainer>
        <Controller
          rules={{ required: true }}
          control={control}
          name={signUpMap.firstName}
          render={({ field }) => {
            return (
              <Styled.InputContainer>
                <Styled.MuiInput
                  label="First Name"
                  field={field}
                  InputLabelProps={{ shrink: true }}
                  hasError={!!errors[signUpMap.firstName]}
                  errorMessage={errors[signUpMap.firstName]?.message}
                />
              </Styled.InputContainer>
            );
          }}
        />
        <Controller
          rules={{ required: true }}
          control={control}
          name={signUpMap.lastName}
          render={({ field }) => {
            return (
              <Styled.InputContainer>
                <Styled.MuiInput
                  label="Last Name"
                  field={field}
                  InputLabelProps={{ shrink: true }}
                  hasError={!!errors[signUpMap.lastName]}
                  errorMessage={errors[signUpMap.lastName]?.message}
                />
              </Styled.InputContainer>
            );
          }}
        />
      </Styled.RowContainer>
      <Controller
        rules={{ required: true }}
        control={control}
        name={signUpMap.email}
        render={({ field }) => {
          return (
            <Styled.InputContainer>
              <Styled.MuiInput
                label="Email"
                field={field}
                InputLabelProps={{ shrink: true }}
                hasError={!!errors[signUpMap.email]}
                errorMessage={errors[signUpMap.email]?.message}
              />
            </Styled.InputContainer>
          );
        }}
      />
      <Controller
        rules={{ required: true }}
        control={control}
        name={signUpMap.password}
        render={({ field }) => {
          return (
            <Styled.InputContainer>
              <Styled.MuiInput
                label="Password"
                field={field}
                type="password"
                InputLabelProps={{ shrink: true }}
                hasError={!!errors[signUpMap.password]}
                errorMessage={errors[signUpMap.password]?.message}
              />
            </Styled.InputContainer>
          );
        }}
      />
      <Controller
        rules={{ required: true }}
        control={control}
        name={signUpMap.confirmPassword}
        render={({ field }) => {
          return (
            <Styled.InputContainer>
              <Styled.MuiInput
                label="Confirm password"
                field={field}
                type="password"
                InputLabelProps={{ shrink: true }}
                hasError={!!errors[signUpMap.confirmPassword]}
                errorMessage={errors[signUpMap.confirmPassword]?.message}
              />
            </Styled.InputContainer>
          );
        }}
      />
      <Styled.RowContainer>
        <Styled.StyledButton
          handleClick={() => {
            if (payload.confirmPassword === payload.password) {
              setPasswordMatched(true);
              setYourDetails(payload as YourDetailsType);
              onNextClick();
            } else {
              setPasswordMatched(false);
            }
          }}
          isDisabled={isDisabled}
        >
          Next
        </Styled.StyledButton>
      </Styled.RowContainer>
    </Styled.Container>
  );
};
