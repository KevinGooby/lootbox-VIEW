export type RadioOption = {
  value: string;
  label: string;
};

export type RadioGroupProps = {
  label: string;
  options: RadioOption[];
  currentValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
