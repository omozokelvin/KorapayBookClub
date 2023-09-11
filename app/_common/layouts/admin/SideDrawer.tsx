import MuiDrawer from '@mui/material/Drawer';

import { CSSObject, styled, Theme } from '@mui/material/styles';

import SiteLogo from '@/app/_common/components/UI/SiteLogo';
import { DRAWER_WIDTH } from '@/app/_common/constants/config';
import NavList from '@/app/_common/layouts/admin/NavList';
import { Box } from '@mui/material';

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: theme.palette.background.paper,
  borderRight: 'unset',
  overflowY: 'clip',
  '::-webkit-scrollbar': {
    width: '4px',
  },
  '::-webkit-scrollbar-thumb': {
    background: theme.palette.grey[400],
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...openedMixin(theme),
  '& .MuiDrawer-paper': openedMixin(theme),
}));

export default function SideDrawer() {
  return (
    <Drawer variant="permanent" open={true}>
      <Box px={2} py={2}>
        <SiteLogo />

        <NavList />
      </Box>
    </Drawer>
  );
}
