import { AuthContextProvider } from '@/app/_common/contexts/AuthContext';
import NotistackProvider from '@/app/_common/providers/NotistackProvider';
import ThemeRegistry from '@/app/_common/theme/ThemeRegistry';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Duplo',
  description: 'Duplo - Dashboard template built with Next.js and MUI',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <AuthContextProvider>
            <NotistackProvider>{children}</NotistackProvider>
          </AuthContextProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
