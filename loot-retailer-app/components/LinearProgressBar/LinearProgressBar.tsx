import { Typography } from '../Typography';
import * as Styled from './LinearProgressBar.styles';
import React from 'react';

type LinearProgressBarProps = {
  variant?: 'determinate' | 'indeterminate';
  hasLabel?: boolean;
};

export const LinearProgressBar = ({ hasLabel }: LinearProgressBarProps) => {
  return (
    <Styled.Container>
      <Styled.LinearProgressBar />
      {hasLabel && <Typography variant="body2">50%</Typography>}
    </Styled.Container>
  );
};
