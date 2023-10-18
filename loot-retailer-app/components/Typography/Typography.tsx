import { TypographyProps } from './Typography.props';
import * as Styled from './Typography.styles';

export const Typography = ({
  variant,
  children,
  onClick,
  ...props
}: TypographyProps) => {
  return (
    <Styled.StyledText {...props} variant={variant} onClick={onClick}>
      {children}
    </Styled.StyledText>
  );
};
