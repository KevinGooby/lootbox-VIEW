import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DropdownProps } from './Dropdown.props';

const testData = ['test1', 'test2', 'test3'];

export const Dropdown = ({
  label,
  value,
  handleClick,
  options,
  field,
  ...props
}: DropdownProps) => {
  return (
    <FormControl fullWidth {...props} {...field}>
      <InputLabel>{label}</InputLabel>
      <Select value={value || ''} onChange={handleClick} label={label}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
