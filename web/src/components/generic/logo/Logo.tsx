import React from 'react';
import { LogoProps } from './index';

export function Logo({ className, size = 'regular' }: LogoProps) {
  return <img className={className} src={`/img/logo/${size}.png`} width={72} height={72} />;
}
