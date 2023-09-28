'use client';
import DashboardLayout from '@/app/_common/layouts/DashboardLayout';
import { store } from '@/app/_common/redux/store';
import ThemeRegistry from '@/app/_common/theme/ThemeRegistry';
import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import './globals.css';

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <ReduxProvider store={store}>
          <ThemeRegistry options={{ key: 'mui' }}>
            <DashboardLayout>{children}</DashboardLayout>
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
