import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function useBreakPoints(direction: 'up' | 'down') {
  const theme = useTheme();

  return {
    extraSmall: useMediaQuery(theme.breakpoints[direction]('xs')),
    small: useMediaQuery(theme.breakpoints[direction]('sm')),
    medium: useMediaQuery(theme.breakpoints[direction]('md')),
    large: useMediaQuery(theme.breakpoints[direction]('lg')),
    extraLarge: useMediaQuery(theme.breakpoints[direction]('xl')),
  };
}
