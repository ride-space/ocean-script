'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ViewTransitions } from 'next-view-transitions';

export const NextUIProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <ViewTransitions>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider attribute='class' defaultTheme='dark'>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </ViewTransitions>
  );
};
