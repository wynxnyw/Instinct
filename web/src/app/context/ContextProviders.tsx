import React from 'react';
import { ContextProvidersProps, ConfigProvider, SessionContextProvider } from './index';

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <>
      <ConfigProvider>
        <SessionContextProvider>{children}</SessionContextProvider>
      </ConfigProvider>
    </>
  );
}
