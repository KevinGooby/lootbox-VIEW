import { LoadingDots } from '../LoadingDots';
import * as Styled from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button = ({
  children,
  isLoading,
  isDisabled,
  handleClick,
  variant,
  className,
  loadingDotDiameter = 12,
  handleBlur,
  handleMouseDown,
}: ButtonProps) => (
  <Styled.Button
    className={className}
    onClick={isDisabled || isLoading ? undefined : handleClick}
    isLoading={isLoading}
    variant={variant}
    disabled={isDisabled}
    onBlur={handleBlur}
    onMouseDown={handleMouseDown}
  >
    <>
      {children}
      {isLoading && <LoadingDots dotDiameter={loadingDotDiameter} />}
    </>
  </Styled.Button>
);
