import { InputProps } from './Input.props';
import * as Styled from './Input.styles';

export const Input = ({
  label,
  isDisabled,
  isLoading,
  field,
  type = 'text',
  required = true,
  InputLabelProps,
  hasError,
  errorMessage,
  value,
  ...props
}: InputProps) => {
  return (
    <Styled.MuiInput
      value={value}
      {...props}
      {...field}
      error={hasError}
      helperText={errorMessage}
      label={label}
      disabled={isDisabled || isLoading}
      type={type}
      required={required}
      InputLabelProps={InputLabelProps}
    />
  );
};
