import SiteLogoIcon from '@/app/_common/components/icons/SiteLogoIcon';
import { Box, Typography } from '@mui/material';

type Props = {
  hideText?: boolean;
};
export default function SiteLogo(props: Props) {
  const { hideText = false } = props;

  return (
    <Box display="flex" alignItems="center" columnGap={2}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundColor: 'black',
          height: '50px',
          width: '50px',
        }}
      >
        <SiteLogoIcon />
      </Box>

      {!hideText && (
        <Box>
          <Typography
            variant="h1"
            fontSize="1.125rem"
            color="black"
            fontWeight={400}
            mb={0}
          >
            Korapay Book Club
          </Typography>
          <Typography variant="caption" color="grey.100" fontWeight={400}>
            Admin
          </Typography>
        </Box>
      )}
    </Box>
  );
}
