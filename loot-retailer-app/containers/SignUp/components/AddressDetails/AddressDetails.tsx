import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { addressSchema } from '../../SignUp.types';
import {
  AddressDetailsType,
  signUpBusinessDetailsAddressMap,
} from '../../constants';
import * as Styled from '@/containers/SignUp/styles/SignupDetails.styles';
import { useContext } from 'react';
import { SignUpContext } from '../../context/SignUpContext';
import { useWindowResize } from '@/hooks/useWindowResize';

export const AddressDetails = () => {
  const { onPreviousClick, onNextClick, addressDetails, setAddressDetails } =
    useContext(SignUpContext);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(addressSchema),
    defaultValues: {
      [signUpBusinessDetailsAddressMap.street]: addressDetails.street,
      [signUpBusinessDetailsAddressMap.unit]: addressDetails.unit,
      [signUpBusinessDetailsAddressMap.postalCode]: addressDetails.postalCode,
      [signUpBusinessDetailsAddressMap.city]: addressDetails.city,
      [signUpBusinessDetailsAddressMap.country]: addressDetails.country,
      [signUpBusinessDetailsAddressMap.province]: addressDetails.province,
    },
  });

  const payload = watch();
  const { isTablet } = useWindowResize();

  const isDisabled = !isValid;

  //TODO: add province dropdown and country dropdown
  return (
    <Styled.Container isTablet={isTablet}>
      <Styled.RowContainer>
        <Controller
          rules={{ required: true }}
          control={control}
          name={signUpBusinessDetailsAddressMap.street}
          render={({ field }) => {
            return (
              <Styled.InputContainer>
                <Styled.MuiInput
                  label="Street Address"
                  field={field}
                  InputLabelProps={{ shrink: true }}
                  hasError={!!errors[signUpBusinessDetailsAddressMap.street]}
                  errorMessage={
                    errors[signUpBusinessDetailsAddressMap.street]?.message
                  }
                />
              </Styled.InputContainer>
            );
          }}
        />

        <Controller
          rules={{ required: false }}
          control={control}
          name={signUpBusinessDetailsAddressMap.unit}
          render={({ field }) => {
            return (
              <Styled.InputContainer>
                <Styled.MuiInput
                  required={false}
                  label="Apartment,Suite, Unit, etc."
                  field={field}
                  InputLabelProps={{ shrink: true }}
                  hasError={!!errors[signUpBusinessDetailsAddressMap.unit]}
                  errorMessage={
                    errors[signUpBusinessDetailsAddressMap.unit]?.message
                  }
                />
              </Styled.InputContainer>
            );
          }}
        />
      </Styled.RowContainer>
      <Styled.RowContainer>
        <Controller
          rules={{ required: true }}
          control={control}
          name={signUpBusinessDetailsAddressMap.city}
          render={({ field }) => {
            return (
              <Styled.InputContainer>
                <Styled.MuiInput
                  label="City"
                  field={field}
                  InputLabelProps={{ shrink: true }}
                  hasError={!!errors[signUpBusinessDetailsAddressMap.city]}
                  errorMessage={
                    errors[signUpBusinessDetailsAddressMap.city]?.message
                  }
                />
              </Styled.InputContainer>
            );
          }}
        />

        <Controller
          rules={{ required: true }}
          control={control}
          name={signUpBusinessDetailsAddressMap.postalCode}
          render={({ field }) => {
            return (
              <Styled.InputContainer>
                <Styled.MuiInput
                  label="Postal Code"
                  field={field}
                  InputLabelProps={{ shrink: true }}
                  hasError={
                    !!errors[signUpBusinessDetailsAddressMap.postalCode]
                  }
                  errorMessage={
                    errors[signUpBusinessDetailsAddressMap.postalCode]?.message
                  }
                />
              </Styled.InputContainer>
            );
          }}
        />
      </Styled.RowContainer>

      <Styled.RowContainer>
        <Controller
          rules={{ required: false }}
          control={control}
          name={signUpBusinessDetailsAddressMap.province}
          render={({ field }) => {
            return (
              <Styled.InputContainer>
                <Styled.MuiInput
                  required={false}
                  label="Province/State/Territory"
                  field={field}
                  InputLabelProps={{ shrink: true }}
                  hasError={!!errors[signUpBusinessDetailsAddressMap.province]}
                  errorMessage={
                    errors[signUpBusinessDetailsAddressMap.province]?.message
                  }
                />
              </Styled.InputContainer>
            );
          }}
        />
        <Controller
          rules={{ required: true }}
          control={control}
          name={signUpBusinessDetailsAddressMap.country}
          render={({ field }) => {
            return (
              <Styled.InputContainer>
                <Styled.MuiInput
                  label="Country"
                  field={field}
                  InputLabelProps={{ shrink: true }}
                  hasError={!!errors[signUpBusinessDetailsAddressMap.country]}
                  errorMessage={
                    errors[signUpBusinessDetailsAddressMap.country]?.message
                  }
                />
              </Styled.InputContainer>
            );
          }}
        />
      </Styled.RowContainer>

      <Styled.ButtonContainer>
        <Styled.StyledButton handleClick={onPreviousClick}>
          Previous
        </Styled.StyledButton>
        <Styled.StyledButton
          handleClick={() => {
            setAddressDetails(
              payload as Omit<AddressDetailsType, 'unit'> & {
                unit?: number;
              }
            );
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
