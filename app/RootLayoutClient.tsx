'use client';

import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/Navigation';
import { Toaster } from 'sonner';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <Navigation />
      {children}
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}