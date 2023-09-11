import LoadingImage from '@/app/_common/components/UI/LoadingImage';
import Grid from '@mui/material/Grid';

export default function PageLoading() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh' }}
    >
      <LoadingImage />
    </Grid>
  );
}
