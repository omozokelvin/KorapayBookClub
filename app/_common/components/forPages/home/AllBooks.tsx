import SingleBook from '@/app/_common/components/forPages/home/SingleBook';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import useCustomRouter, {
  QueryParamEnum,
} from '@/app/_common/hooks/useCustomRouter';
import { RootState, useSelector } from '@/app/_common/redux/store';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

export default function AllBooks() {
  const { medium: mediumDownwards } = useBreakPoints('down');

  const { getQueryParam } = useCustomRouter();

  const search = getQueryParam(QueryParamEnum.search) || '';

  const { books } = useSelector((state: RootState) => state.books);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const searchString = book.title + ' - ' + book?.authors.join(', ');

      return searchString.toLowerCase().includes(search.toLowerCase());
    });
  }, [books, search]);

  return (
    <Stack mb={5} px={5}>
      {!mediumDownwards && (
        <Box>
          <Typography variant="h2" mb={2}>
            All Books
          </Typography>

          <Divider sx={{ mb: '23px' }} />
        </Box>
      )}

      <Grid container spacing={'20px'}>
        {filteredBooks.map((book) => (
          <Grid
            key={'recently_added' + book.title + book.id}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <SingleBook book={book} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
