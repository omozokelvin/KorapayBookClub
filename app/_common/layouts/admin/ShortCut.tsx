import LightTooltip from '@/app/_common/components/UI/LightToolTip';
import AddIcon from '@mui/icons-material/Add';
import {
  ClickAwayListener,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

export default function ShortCut() {
  const router = useRouter();
  const [openShortCutMenu, setOpenShortCutMenu] = useState(false);

  const handleTooltipOpen = () => {
    setOpenShortCutMenu(true);
  };

  const handleTooltipClose = () => {
    setOpenShortCutMenu(false);
  };

  const shortCuts = useMemo(() => {
    return [
      { title: 'Customer', onClick: () => router.push('/dashboard/customers') },
      { title: 'Team', onClick: () => router.push('/dashboard/teams') },
      { title: 'Service', onClick: () => router.push('/dashboard/services') },
      { title: 'Product', onClick: () => router.push('/dashboard/products') },
    ];
  }, [router]);

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <LightTooltip
          open={openShortCutMenu}
          onClose={handleTooltipClose}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement="bottom-end"
          arrow
          title={
            <List sx={{ width: '232px' }}>
              {shortCuts.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={item.onClick}
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      color: (theme) => theme.palette.text.secondary,
                    }}
                  />
                </ListItem>
              ))}
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
            <AddIcon fontSize="inherit" />
          </IconButton>
        </LightTooltip>
      </div>
    </ClickAwayListener>
  );
}
