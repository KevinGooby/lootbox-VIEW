import { Typography } from '@/components/Typography';
import * as Styled from './SignUpLoadingScreen.styles';
import { Spinner } from '@/components/Spinner';

export const SignUpLoadingScreen = () => {
  return (
    <Styled.Container>
      <Typography variant="h4">Enter a product slogan here</Typography>
      <Spinner />
      <Typography variant="h6">Creating account...</Typography>
    </Styled.Container>
  );
};
