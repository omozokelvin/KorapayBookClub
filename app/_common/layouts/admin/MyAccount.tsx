import {
  Avatar,
  ClickAwayListener,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import LightTooltip from '@/app/_common/components/UI/LightToolTip';
import { useRouter } from 'next/navigation';
import ConfirmDialog from '../../components/UI/ConfirmDialog';
import { useAuth } from '../../contexts/AuthContext';

export default function MyAccount() {
  const router = useRouter();
  const { logout, user } = useAuth();

  const [openAccountMenu, setOpenAccountMenu] = useState(false);

  const [showDialog, setShowDialog] = useState(false);

  const handleTooltipOpen = () => {
    setOpenAccountMenu(true);
  };

  const handleTooltipClose = () => {
    setOpenAccountMenu(false);
  };

  return (
    <>
      {showDialog && (
        <ConfirmDialog
          showDialog={showDialog}
          title="Are you sure?"
          message="You are about to log out from your account"
          confirmText="Yes, Log out"
          confirmDanger
          onClose={() => setShowDialog(false)}
          onConfirm={logout}
          centered
        />
      )}

      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <LightTooltip
            open={openAccountMenu}
            onClose={handleTooltipClose}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            placement="bottom-end"
            arrow
            title={
              <List>
                <ListItem
                  secondaryAction={
                    <ArrowForwardIosOutlinedIcon
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: '0.875rem',
                      }}
                    />
                  }
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  <ListItemText
                    primary="My Account"
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      color: (theme) => theme.palette.text.secondary,
                      pr: 10,
                    }}
                    onClick={() => router.push('/dashboard/account')}
                  />
                </ListItem>

                <ListItem
                  secondaryAction={
                    <LogoutOutlinedIcon
                      sx={{
                        color: (theme) => theme.palette.error.main,
                        fontSize: '0.875rem',
                      }}
                    />
                  }
                  sx={{
                    cursor: 'pointer',
                  }}
                  onClick={() => setShowDialog(true)}
                >
                  <ListItemText
                    primary="Logout"
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      color: (theme) => theme.palette.error.main,
                      pr: 10,
                    }}
                  />
                </ListItem>
              </List>
            }
          >
            <IconButton
              size="small"
              sx={{
                ml: 2,
                boxShadow: (theme) => theme.shadows[1],
                backgroundColor: (theme) => theme.palette.common.white,
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.common.white,
                },
              }}
              onClick={handleTooltipOpen}
            >
              <Avatar
                alt={user?.firstName}
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: 'inherit',
                  color: (theme) => theme.palette.text.secondary,
                }}
              />
            </IconButton>
          </LightTooltip>
        </div>
      </ClickAwayListener>
    </>
  );
}
