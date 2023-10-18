import * as Styled from '@/containers/SignUp/styles/SignupDetails.styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  BusinessDetailsType,
  Industry,
  categoryOptions,
  industryOptions,
  signUpBusinessDetailsMap,
} from '../../constants';
import { signUpBusinessDetailsSchema } from '../../SignUp.types';
import { useContext } from 'react';
import { SignUpContext } from '../../context/SignUpContext';
import { useWindowResize } from '@/hooks/useWindowResize';

export const BusinessDetails = () => {
  const { onPreviousClick, onNextClick, businessDetails, setBusinessDetails } =
    useContext(SignUpContext);

  const {
    control,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(signUpBusinessDetailsSchema),
    defaultValues: {
      [signUpBusinessDetailsMap.businessName]: businessDetails.businessName,
      [signUpBusinessDetailsMap.businessPhoneNumber]:
        businessDetails.businessPhoneNumber,
      [signUpBusinessDetailsMap.industry]: businessDetails.industry,
      [signUpBusinessDetailsMap.category]: businessDetails.category,
    },
  });

  const payload = watch();
  const { isTablet } = useWindowResize();

  const isDisabled = !isValid;

  return (
    <Styled.Container isTablet={isTablet}>
      <Controller
        rules={{ required: true }}
        control={control}
        name={signUpBusinessDetailsMap.businessName}
        render={({ field }) => {
          return (
            <Styled.InputContainer>
              <Styled.MuiInput
                label="Business Name"
                field={field}
                InputLabelProps={{ shrink: true }}
                hasError={!!errors[signUpBusinessDetailsMap.businessName]}
                errorMessage={
                  errors[signUpBusinessDetailsMap.businessName]?.message
                }
              />
            </Styled.InputContainer>
          );
        }}
      />
      <Controller
        rules={{ required: true }}
        control={control}
        name={signUpBusinessDetailsMap.businessPhoneNumber}
        render={({ field }) => {
          return (
            <Styled.InputContainer>
              <Styled.MuiInput
                label="Phone Number"
                field={field}
                InputLabelProps={{ shrink: true }}
                hasError={
                  !!errors[signUpBusinessDetailsMap.businessPhoneNumber]
                }
                errorMessage={
                  errors[signUpBusinessDetailsMap.businessPhoneNumber]?.message
                }
              />
            </Styled.InputContainer>
          );
        }}
      />

      <Controller
        rules={{ required: true }}
        control={control}
        name={signUpBusinessDetailsMap.industry}
        render={({ field }) => {
          return (
            <Styled.InputContainer>
              <Styled.MuiDropdown
                value={field.value}
                label="Industry"
                handleClick={field.onChange}
                options={industryOptions}
              />
            </Styled.InputContainer>
          );
        }}
      />

      <Controller
        rules={{ required: true }}
        control={control}
        name={signUpBusinessDetailsMap.category}
        render={({ field }) => {
          return (
            <Styled.InputContainer>
              <Styled.MuiDropdown
                value={field.value}
                label="Category"
                handleClick={field.onChange}
                options={categoryOptions(payload.industry as Industry)}
              />
            </Styled.InputContainer>
          );
        }}
      />

      <Styled.ButtonContainer>
        <Styled.StyledButton handleClick={onPreviousClick}>
          Previous
        </Styled.StyledButton>
        <Styled.StyledButton
          handleClick={() => {
            setBusinessDetails(payload as BusinessDetailsType);
            onNextClick();
          }}
          isDisabled={isDisabled}
        >
          Next
        </Styled.StyledButton>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
