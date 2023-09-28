import { formatNumber } from '@/app/_common/utils/numbers';
import { Box, Rating, Typography } from '@mui/material';

type Props = {
  ratings: number;
};

export default function BookRating(props: Props) {
  const { ratings } = props;
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="caption" mb={'3px'}>
        Ratings: {formatNumber(ratings)}
      </Typography>

      <Rating
        value={ratings}
        readOnly
        size="small"
        sx={{
          '& .MuiRating-icon': {
            fontSize: '0.875rem',
          },
        }}
      />
    </Box>
  );
}
