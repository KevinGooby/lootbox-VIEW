import { LinearProgress } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LinearProgressBar = styled(LinearProgress)`
  width: 50%;
`;
