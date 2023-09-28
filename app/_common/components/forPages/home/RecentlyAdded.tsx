import SingleBook from '@/app/_common/components/forPages/home/SingleBook';
import useCustomRouter, {
  QueryParamEnum,
} from '@/app/_common/hooks/useCustomRouter';
import { RootState, useSelector } from '@/app/_common/redux/store';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

export default function RecentlyAdded() {
  const { getQueryParam } = useCustomRouter();

  const { books } = useSelector((state: RootState) => state.books);

  const search = getQueryParam(QueryParamEnum.search) || '';

  const recentlyAddedBooks = useMemo(() => {
    return books
      .filter((book) => book.recentlyAdded)
      .filter((book) => {
        const searchString = book.title + ' - ' + book?.authors.join(', ');

        return searchString.toLowerCase().includes(search.toLowerCase());
      });
  }, [books, search]);

  return (
    <Stack mb={5} px={5}>
      <Box>
        <Typography variant="h2" mb={2}>
          Recently Added
        </Typography>

        <Divider sx={{ mb: '23px' }} />
      </Box>

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
