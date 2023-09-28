'use client';
import { DRAWER_WIDTH } from '@/app/_common/constants/config';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import SideDrawer from '@/app/_common/layouts/SideDrawer';
import TopBar from '@/app/_common/layouts/TopBar';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode, useEffect, useState } from 'react';

type Props = { children: ReactNode };

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(0, 0),
  width: `calc(100vw - ${DRAWER_WIDTH}px)`,
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(8),
}));

export default function DashboardLayout(props: Props) {
  const { children } = props;

  const { medium: mediumDownwards } = useBreakPoints('down');

  const [open, setOpen] = useState(!mediumDownwards);

  useEffect(() => {
    if (mediumDownwards) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [mediumDownwards]);

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <CssBaseline />

      <TopBar setOpen={setOpen} />

      <SideDrawer open={open} setOpen={setOpen} />

      <Main>
        <DrawerHeader />

        {children}
      </Main>

      {/* <Box
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
      </Box> */}
    </Box>
  );
}
