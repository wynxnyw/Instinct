import { Children } from 'components/index';

export type TypographyType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TypographyProps {
  children: Children;
  type: TypographyType;
}
