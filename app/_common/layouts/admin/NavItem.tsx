import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import theme from '@/app/_common/theme/theme';
import { NavListItem } from '@/app/_common/types/Dashboard';
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
        height: '44px',
        justifyContent: 'initial',
        borderRadius: '12px',
        px: 1.5,
        my: 0.5,
        ...(isActiveLink(item.link) && {
          background: (theme) => theme.palette.primary.main,
          transition: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }),
        '&:hover': {
          ...(isActiveLink(item.link)
            ? { background: theme.palette.primary.main }
            : { background: 'unset' }),
        },
      }}
    >
      {item.icon(isActiveLink(item.link))}

      <ListItemText
        disableTypography
        primary={item.name}
        sx={{
          fontSize: '0.875rem',
          color: isActiveLink(item.link)
            ? 'common.white'
            : theme.palette.grey[100],
          opacity: 1,
          flex: 'initial',
          ml: 1.5,
        }}
      />
    </ListItemButton>
  );
}
