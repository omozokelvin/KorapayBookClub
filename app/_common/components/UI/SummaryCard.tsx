import OverlappingCircularProgress from '@/app/_common/components/OverlappingCircularProgress';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Card, Stack, Typography, alpha } from '@mui/material';

type Props = {
  title: string;
  total: number;
  sharePercentage: number;
  chartPercentage: number;
  color: 'success' | 'warning' | 'error';
};
export default function SummaryCard(props: Props) {
  const { title, total, sharePercentage, chartPercentage, color } = props;

  return (
    <Card>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column" rowGap={1}>
          <Typography variant="subtitle1" color="grey.100" fontWeight={600}>
            {title}
          </Typography>

          <Typography variant="h4" color="grey.400" fontWeight={700}>
            {total}
          </Typography>

          <Box display="flex" alignItems="center" columnGap={1}>
            <Box
              sx={{
                p: 1,
                borderRadius: '50%',
                height: '30px',
                width: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: (theme) =>
                  alpha(theme.palette[color].main, 0.1),
              }}
            >
              <TrendingUpIcon sx={{ fontSize: '16px' }} color={color} />
            </Box>

            <Typography variant="body2" color="grey.400">
              +{sharePercentage}% Inc
            </Typography>
          </Box>
        </Box>

        <Box>
          <OverlappingCircularProgress value={chartPercentage} color={color} />
        </Box>
      </Stack>
    </Card>
  );
}
