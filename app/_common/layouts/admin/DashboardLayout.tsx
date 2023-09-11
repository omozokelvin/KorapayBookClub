'use client';
import loggedInGuard from '@/app/_common/HOC/LoggedInGuard';
import PageLoading from '@/app/_common/components/UI/PageLoading';
import { DRAWER_WIDTH } from '@/app/_common/constants/config';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import MobileBottomBar from '@/app/_common/layouts/admin/MobileBottomBar';
import SideDrawer from '@/app/_common/layouts/admin/SideDrawer';
import TopBar from '@/app/_common/layouts/admin/TopBar';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode, useEffect, useState } from 'react';

type Props = { children: ReactNode };

function DashboardLayout(props: Props) {
  const { children } = props;
  const [wait, setWait] = useState(true);
  const { medium: mediumDownwards } = useBreakPoints('down');
  const [hideDrawer, setHideDrawer] = useState(mediumDownwards);
  const [miniNav, setMiniNav] = useState(false);

  const toggleDrawer = () => {
    if (!miniNav) {
      return;
    }

    setMiniNav((current) => !current);
  };

  useEffect(() => {
    setWait(false);
  }, []);

  if (wait) {
    return <PageLoading />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <CssBaseline />

      {(!mediumDownwards || !hideDrawer) && <SideDrawer />}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          pb: 3,
          pt: 2,
          overflowX: 'auto',
          '::-webkit-scrollbar': {
            width: '4px',
          },
          '::-webkit-scrollbar-thumb': {
            background: (theme) => theme.palette.grey[400],
            borderRadius: '100px',
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack
            sx={{
              minWidth: '100%',
              minHeight: '100vh',
            }}
          >
            <TopBar />

            <Box
              sx={{
                overflowX: 'auto',
                maxWidth: `calc(100vw - ${DRAWER_WIDTH}px - 200px`,
                border: '1px solid green',
              }}
            >
              {children}
            </Box>
          </Stack>
        </Stack>
      </Box>

      {mediumDownwards && (
        <MobileBottomBar
          onOpenSidebar={() => {
            setHideDrawer((hidden) => !hidden);
            toggleDrawer();
          }}
        />
      )}
    </Box>
  );
}

export default loggedInGuard(DashboardLayout);
