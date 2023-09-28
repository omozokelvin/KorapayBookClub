import SiteLogo from '@/app/_common/components/UI/SiteLogo';
import BackArrowIcon from '@/app/_common/components/icons/BackArrowIcon';
import { DRAWER_WIDTH } from '@/app/_common/constants/config';
import { ROUTES } from '@/app/_common/constants/routes';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import NavItem from '@/app/_common/layouts/NavItem';
import { NavListItem } from '@/app/_common/types/Dashboard';
import { Box, Drawer, IconButton, List, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

// TODO: Add the proper links when the pages are there
const listItems: NavListItem[] = [
  {
    items: [
      {
        name: 'Home',
        link: ROUTES.home,
      },
      {
        name: 'Profile',
        link: ROUTES.unknown,
      },
      {
        name: 'Notifications',
        link: ROUTES.unknown,
        count: 3,
        isNotification: true,
      },
    ],
  },
  {
    title: 'Explore',
    items: [
      {
        name: 'Books',
        link: ROUTES.unknown,
        count: 273,
      },
      {
        name: 'Genres',
        link: ROUTES.unknown,
        count: 42,
      },
      {
        name: 'Authors',
        link: ROUTES.unknown,
        count: 106,
      },
    ],
  },
  {
    title: 'My Books',
    items: [
      {
        name: 'Queued',
        link: ROUTES.unknown,
        count: 3,
      },
      {
        name: 'Currently Borrowed',
        link: ROUTES.unknown,
        count: 0,
      },
      {
        name: 'Favourites',
        link: ROUTES.unknown,
        count: 19,
      },
      {
        name: 'History',
        link: ROUTES.unknown,
      },
    ],
  },
  {
    title: 'Admin',
    items: [
      {
        name: 'Book Requests',
        link: ROUTES.unknown,
        count: 2,
        isNotification: true,
      },
      {
        name: 'Members',
        link: ROUTES.unknown,
        count: 34,
      },
      {
        //TODO: there's a slight off in the padding for library settings in the desktop design, confirm if it's needed
        name: 'Library Settings',
        link: ROUTES.unknown,
      },
    ],
  },
];

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function SideDrawer(props: Props) {
  const { open, setOpen } = props;
  const { medium: mediumDownwards } = useBreakPoints('down');

  return (
    <Drawer
      variant={mediumDownwards ? 'temporary' : 'persistent'}
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        flexShrink: 0,
        width: DRAWER_WIDTH,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          // boxSizing: 'border-box',
          boxShadow: '-10px 0px 40px 0px rgba(0, 0, 0, 0.1)',
          overflowX: 'hidden',
          backgroundColor: 'background.paper',
          borderRight: 'unset',
          overflowY: 'auto',
          pt: mediumDownwards ? '30px' : '100px',
          '::-webkit-scrollbar': {
            width: '4px',
          },
          '::-webkit-scrollbar-thumb': {
            background: (theme) => theme.palette.grey[400],
          },
          px: 3,
        },
      }}
    >
      {mediumDownwards && (
        <Box>
          <IconButton
            sx={{
              mb: 3,
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <BackArrowIcon />
          </IconButton>

          <SiteLogo />
        </Box>
      )}

      <List>
        {listItems.map((listItem, index) => (
          <Box
            key={listItem.title}
            display="flex"
            flexDirection="column"
            py={3}
            sx={{
              ...(listItems.length - 1 !== index && {
                borderBottom: '1px solid #EEEEEE',
              }),
            }}
          >
            {!!listItem.title && (
              <Typography variant="body2" fontWeight={600} mb={2}>
                {listItem.title}
              </Typography>
            )}

            {listItem.items.map((navItem) => (
              <NavItem key={navItem.name} item={navItem} />
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
