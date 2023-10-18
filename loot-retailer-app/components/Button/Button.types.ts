import type { MouseEvent, ReactNode } from 'react';

type Variants = 'contained' | 'outlined' | 'text';

export type ButtonProps = {
  children?: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  handleClick?: (event: MouseEvent) => void;
  className?: string;
  variant?: Variants;
  loadingDotDiameter?: number;
  handleBlur?: () => void;
  handleMouseDown?: (event: MouseEvent) => void;
  width?: number;
};
