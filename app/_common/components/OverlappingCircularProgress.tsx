import {
  Box,
  CircularProgress,
  Typography,
  circularProgressClasses,
} from '@mui/material';

const size = '120px';

type Props = { value: number; color: 'success' | 'warning' | 'error' };
export default function OverlappingCircularProgress(props: Props) {
  const { value, color } = props;
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          position: 'absolute',
          fontSize: '24px',
          fontWeight: 700,
          color: 'grey.400',
        }}
      >
        {value < 0 ? '-' : '+'}
        {value}%
      </Typography>

      <CircularProgress
        variant="determinate"
        value={100}
        sx={{
          color: 'grey.500',
          position: 'absolute',
        }}
        size={size}
      />

      <CircularProgress
        color={color}
        variant="determinate"
        value={value}
        sx={{
          position: 'relative',
          left: 0,
          borderRadius: '50%',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={size}
      />
    </Box>
  );
}
