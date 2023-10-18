import CircleIcon from '@mui/icons-material/Circle';

import * as Styled from './LoadingDots.styles';
import type { LoadingDotsProps } from './LoadingDots.types';

export const LoadingDots = ({ dotDiameter }: LoadingDotsProps) => {
  return (
    <Styled.LoadingState onClick={(event) => event.stopPropagation()} dotDiameter={dotDiameter}>
      <CircleIcon color="inherit" id="first-dot" />
      <CircleIcon color="inherit" id="second-dot" />
      <CircleIcon color="inherit" id="third-dot" />
    </Styled.LoadingState>
  );
};
