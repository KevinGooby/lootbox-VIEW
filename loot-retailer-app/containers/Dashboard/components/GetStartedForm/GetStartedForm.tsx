import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useForm,
} from 'react-hook-form';
import { createStampMap, createStampSchema } from '../../constants';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Styled from './GetStartedForm.styles';
import { useContext } from 'react';
import {
  DashboardContext,
  DashboardContextProps,
} from '../../context/DashboardContext';

export const GetStartedForm = () => {
  const { createStamp } = useContext(DashboardContext) as DashboardContextProps;

  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(createStampSchema),
    defaultValues: {
      [createStampMap.name]: '',
      [createStampMap.visitsNeededPerRedemption]: 10,
      [createStampMap.discountPercentage]: 100,
      [createStampMap.redemptionCheckpoints]: 10,
    },
  });
  const isDisabled = !isValid;
  const payload = watch();

  return (
    <Styled.Container>
      <Styled.Label variant="body1">Stamp card name</Styled.Label>
      <Controller
        rules={{ required: true }}
        control={control}
        name="name"
        render={({ field }) => {
          return (
            <Styled.InputContainer>
              <Styled.MuiInput
                label="Name"
                field={field as ControllerRenderProps<FieldValues, string>}
                InputLabelProps={{ shrink: true }}
                hasError={!!errors[createStampMap.name]}
                errorMessage={errors[createStampMap.name]?.message}
              />
            </Styled.InputContainer>
          );
        }}
      />
      <Styled.RowContainer>
        <Styled.Container>
          <Styled.Label variant="body1">Rewards at</Styled.Label>
          <Controller
            rules={{ required: true }}
            control={control}
            name="visitsNeededPerRedemption"
            render={({ field }) => {
              return (
                <Styled.InputContainer>
                  <Styled.MuiInput
                    label="Rewards at"
                    type="number"
                    value={field.value as number}
                    onChange={(e) => {
                      field.onChange(parseInt(e.target.value) < 0? e.target.value = 0: e.target.value);
                    }}
                    onKeyDown={(e) => {
                      // Restrict input to numbers and prevent negative sign
                      if (
                        (e.key === "-" && e.target.selectionStart === 0) || // Prevent negative sign at the beginning
                        (!/^\d$/.test(e.key) && !/Backspace|Delete|Arrow/.test(e.key)) // Allow digits, backspace, delete, and arrow keys
                      ) {
                        e.preventDefault();
                      }
                    }}
                    InputLabelProps={{ shrink: true }}
                    hasError={
                      !!errors[createStampMap.visitsNeededPerRedemption]
                    }
                    errorMessage={
                      errors[createStampMap.visitsNeededPerRedemption]?.message
                    }
                  />
                </Styled.InputContainer>
              );
            }}
          />
        </Styled.Container>
        <Styled.Container>
          <Styled.Label variant="body1">Discount Percentage</Styled.Label>
          <Controller
            rules={{ required: true }}
            control={control}
            name="discountPercentage"
            render={({ field }) => {
              return (
                <Styled.InputContainer>
                  <Styled.MuiInput
                    label="Discount Percentage"
                    onChange={(e) => {
                      field.onChange(parseInt(e.target.value) < 0 ? e.target.value = 0 : parseInt(e.target.value) > 100? e.target.value = 100 : e.target.value);
                      field.onChange(Number.isNaN(e.target.value) ? 0 : e.target.value)
                    }}
                    onKeyDown={(e) => {
                      // Restrict input to numbers and prevent negative sign
                      if (
                        (e.key === "-" && e.target.selectionStart === 0) || // Prevent negative sign at the beginning
                        (!/^\d$/.test(e.key) && !/Backspace|Delete|Arrow/.test(e.key)) // Allow digits, backspace, delete, and arrow keys
                      ) {
                        e.preventDefault();
                      }
                    }}
                    value={field.value}
                    InputLabelProps={{ shrink: true }}
                    hasError={!!errors[createStampMap.discountPercentage]}
                    errorMessage={
                      errors[createStampMap.discountPercentage]?.message
                    }
                  />
                </Styled.InputContainer>
              );
            }}
          />
        </Styled.Container>
      </Styled.RowContainer>

      <Styled.RowContainer>
        <Styled.Container>
          <Styled.Label variant="body1">Redeem at</Styled.Label>
          <Controller
            rules={{ required: true }}
            control={control}
            name="redemptionCheckpoints"
            render={({ field }) => {
              return (
                <Styled.InputContainer>
                  <Styled.MuiInput
                    label="Redeem at"
                    type="number"
                    value={field.value as number}
                    onChange={(e) => {
                      field.onChange(parseInt(e.target.value) < 0? e.target.value = 0: e.target.value);
                    }}
                    InputLabelProps={{ shrink: true }}
                    hasError={!!errors[createStampMap.redemptionCheckpoints]}
                    errorMessage={
                      errors[createStampMap.redemptionCheckpoints]?.message
                    }
                  />
                </Styled.InputContainer>
              );
            }}
          />
        </Styled.Container>
      </Styled.RowContainer>
      <Styled.ButtonContainer>
        <Styled.StyledButton
          isDisabled={isDisabled}
          handleClick={() =>
            createStamp({
              name: payload.name as string,
              visitsNeededPerRedemption:
                payload.visitsNeededPerRedemption as number,
              discountPercentage: payload.discountPercentage as number,
              redemptionCheckpoints: [payload.redemptionCheckpoints as number],
              retailerId: 'temp',
            })
          }
        >
          Save
        </Styled.StyledButton>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
