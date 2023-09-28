import { Avatar, Badge, Box, IconButton, styled } from '@mui/material';

import NotificationIcon from '@/app/_common/components/icons/NotificationIcon';
import SearchIcon from '@/app/_common/components/icons/SearchIcon';
import SiteLogoIcon from '@/app/_common/components/icons/SiteLogoIcon';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import { Dispatch, SetStateAction } from 'react';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: 15,
    top: 15,
    height: '20px',
    width: '20px',
    color: 'white',
  },
}));

type Props = {
  setShowSearch?: Dispatch<SetStateAction<boolean>>;
};
export default function TopBarActions(props: Props) {
  const { setShowSearch } = props;

  const { medium: mediumDownwards } = useBreakPoints('down');

  return (
    <Box display="flex" alignItems="center" columnGap={2}>
      {mediumDownwards && (
        <IconButton
          onClick={() => {
            if (!setShowSearch) {
              return;
            }

            setShowSearch(true);
          }}
        >
          <SearchIcon />
        </IconButton>
      )}

      <SiteLogoIcon fill="black" />

      <StyledBadge badgeContent={4} color="primary">
        <NotificationIcon />
      </StyledBadge>

      <Avatar
        alt="Korapay useRouter"
        src="/images/avatar.png"
        sx={{ width: 50, height: 50 }}
      />
    </Box>
  );
}
