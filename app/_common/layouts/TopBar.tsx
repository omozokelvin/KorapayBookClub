import SiteLogo from '@/app/_common/components/UI/SiteLogo';
import BackArrowIcon from '@/app/_common/components/icons/BackArrowIcon';
import HamburgerIcon from '@/app/_common/components/icons/HamburgerIcon';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import SearchBar from '@/app/_common/layouts/SearchBar';
import TopBarActions from '@/app/_common/layouts/TopBarActions';
import {
  AppBar,
  AppBarProps,
  Box,
  IconButton,
  Toolbar,
  styled,
} from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface AppBarProp extends AppBarProps {
  mediumDownwards: boolean;
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'mediumDownwards',
})<AppBarProp>(({ theme, mediumDownwards }) => ({
  backgroundColor: theme.palette.background.paper,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  height: '100px',
  justifyContent: 'center',
  border: '1px solid rgba(238, 238, 238, 1)',
  ...(!mediumDownwards
    ? {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: '0px 0px 40px 0px rgba(0, 0, 0, 0.05)',
      }
    : {
        boxShadow: '0px 4px 4px 0px #00000040',
      }),
}));

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function TopBar(props: Props) {
  const { setOpen } = props;

  const { medium: mediumDownwards } = useBreakPoints('down');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (!mediumDownwards) {
      setShowSearch(false);
    }
  }, [mediumDownwards]);

  return (
    <StyledAppBar position="fixed" mediumDownwards={mediumDownwards}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          columnGap={mediumDownwards ? 4 : 2}
        >
          {mediumDownwards && !showSearch && (
            <>
              <IconButton
                onClick={() => {
                  setOpen(true);
                }}
              >
                <HamburgerIcon />
              </IconButton>

              <SiteLogo hideText={true} />
            </>
          )}

          {mediumDownwards && showSearch && (
            <IconButton
              onClick={() => {
                setShowSearch(false);
              }}
              sx={{ mr: 4 }}
            >
              <BackArrowIcon />
            </IconButton>
          )}

          {!mediumDownwards && (
            <>
              <SiteLogo />
            </>
          )}
        </Box>

        {!mediumDownwards && <SearchBar />}

        {mediumDownwards && showSearch && <SearchBar />}

        {!mediumDownwards && <TopBarActions />}

        {mediumDownwards && !showSearch && (
          <TopBarActions setShowSearch={setShowSearch} />
        )}
      </Toolbar>
    </StyledAppBar>
  );
}
