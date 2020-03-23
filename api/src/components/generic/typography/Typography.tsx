import React, { ReactElement } from 'react';
import { TypographyProps, TypographyType } from './index';

export function Typography({ children, type }: TypographyProps) {
  const typeToElement: Record<TypographyType, ReactElement> = {
    p: <p>{children}</p>,
    h1: <h1>{children}</h1>,
    h2: <h2>{children}</h2>,
    h3: <h3>{children}</h3>,
    h4: <h4>{children}</h4>,
    h5: <h5>{children}</h5>,
    h6: <h6>{children}</h6>,
  };

  return typeToElement[type];
}
