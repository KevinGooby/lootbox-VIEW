import { Alert as MuiAlert } from '@mui/material';

export const Alert = ({ text, variant, outlineVariant }: AlertProps) => {
  return (
    <MuiAlert severity={variant} variant={outlineVariant}>
      {text}
    </MuiAlert>
  );
};
