import { InputLabelProps } from '@mui/material';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

export type InputProps = {
  label: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  field?: ControllerRenderProps<FieldValues, string>;
  type?: string;
  required?: boolean;
  InputLabelProps?: InputLabelProps;
  hasError?: boolean;
  errorMessage?: string;
  onChange?: (e?: any) => void;
  onKeyDown?: (e?: any) => void;
  value?: string | number;
};
