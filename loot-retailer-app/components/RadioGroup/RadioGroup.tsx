import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from '@mui/material';
import { RadioGroupProps } from './RadioGroup.props';
import * as Styled from './RadioGroup.styles';

export const RadioGroup = ({
  label,
  options,
  currentValue,
  onChange,
  ...props
}: RadioGroupProps) => {
  return (
    <FormControl fullWidth {...props}>
      <FormLabel required>{label}</FormLabel>{' '}
      <Styled.RadioGroupContainer value={currentValue} onChange={onChange} row>
        {options.map((option) => (
          <Styled.RadioContainer
            value={option.value}
            control={
              <Radio
                icon={
                  <Styled.Image
                    src="https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png"
                    alt={option.label}
                  />
                }
                checkedIcon={
                  <Styled.SelectedImage
                    src="https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png"
                    alt={option.label}
                  />
                }
              />
            }
            label={<p>{option.label}</p>}
          />
        ))}
      </Styled.RadioGroupContainer>
    </FormControl>
  );
};
