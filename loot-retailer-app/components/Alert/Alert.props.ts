type AlertProps = {
  variant: 'success' | 'warning' | 'error' | 'info';
  text: string | React.ReactNode;
  outlineVariant?: 'outlined' | 'filled';
};
