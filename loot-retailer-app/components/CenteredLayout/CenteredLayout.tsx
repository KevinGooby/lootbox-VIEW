import { CenteredLayoutProps } from './CenteredLayout.props';
import * as Styled from './CenteredLayout.styles';

export const CenteredLayout = ({ children }: CenteredLayoutProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
