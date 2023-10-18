import { ControllerRenderProps, FieldValues } from 'react-hook-form';

export type Options = {
  label: string;
  value: string;
};

export type DropdownProps = {
  label: string;
  handleClick?: () => void;
  value: string;
  options: Options[];
  field?: ControllerRenderProps<FieldValues, string>;
};
