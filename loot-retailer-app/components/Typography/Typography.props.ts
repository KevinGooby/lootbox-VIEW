import { ReactNode } from 'react';

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';

export type TypographyProps = {
  variant: Variants;
  children: ReactNode;
  onClick?: () => void;
};
