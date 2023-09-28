import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { NavListItem } from '@/app/_common/types/Dashboard';
import { Box, Chip, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface Props {
  item: NavListItem['items'][0];
}

export default function NavItem(props: Props) {
  const { item } = props;

  const router = useRouter();
  const pathname = usePathname();

  const onListItemClick = (link: string) => {
    router.push(link);
  };

  const isActiveLink = useCallback(
    (link: string) => {
      return pathname.includes(`${link}`);
    },
    [pathname]
  );

  return (
    <ListItemButton
      onClick={onListItemClick.bind(null, item.link)}
      sx={{
        height: '30px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        px: 0,
      }}
    >
      <ListItemText
        disableTypography
        primary={
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="body2"
              sx={{
                color: 'black',
                ...(isActiveLink(item.link) && {
                  color: 'primary.main',
                  fontWeight: 500,
                }),
              }}
            >
              {item.name}
            </Typography>

            {(item?.count as number) >= 0 && !item.isNotification && (
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: 'grey.100',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                }}
              >
                {item.count}
              </Typography>
            )}

            {(item?.count as number) >= 0 && item.isNotification && (
              <Chip
                label={item.count}
                color="primary"
                size="small"
                sx={{
                  color: 'white',
                  width: '24px',
                  height: '20px',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                }}
              />
            )}
          </Box>
        }
      />
    </ListItemButton>
  );
}
