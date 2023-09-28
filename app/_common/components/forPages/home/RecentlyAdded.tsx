import SingleBook from '@/app/_common/components/forPages/home/SingleBook';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import { RootState, useSelector } from '@/app/_common/redux/store';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

export default function RecentlyAdded() {
  const { medium: mediumDownwards } = useBreakPoints('down');

  const { books } = useSelector((state: RootState) => state.books);

  const recentlyAddedBooks = useMemo(() => {
    return books.filter((book) => book.recentlyAdded);
  }, [books]);

  return (
    <Stack mb={5} px={5}>
      {!mediumDownwards && (
        <Box>
          <Typography variant="h2" mb={2}>
            Recently Added
          </Typography>

          <Divider sx={{ mb: '23px' }} />
        </Box>
      )}

      <Grid container spacing={'20px'}>
        {recentlyAddedBooks.map((book) => (
          <Grid
            key={'recently_added' + book.title + book.id}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <SingleBook book={book} showOptions={true} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
