import FeaturedBookItem from '@/app/_common/components/forPages/home/FeaturedBookItem';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import { RootState, useSelector } from '@/app/_common/redux/store';
import classes from '@/app/_common/styles/swiper.module.css';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function FeaturedBooks() {
  const { medium: mediumDownwards } = useBreakPoints('down');

  const { books } = useSelector((state: RootState) => state.books);

  const featuredBooks = useMemo(() => {
    return books.filter((book) => book.featured);
  }, [books]);

  return (
    <Stack mb={5}>
      {!mediumDownwards && (
        <Box px={5}>
          <Typography variant="h2" mb={2}>
            Featured Books
          </Typography>

          <Divider sx={{ mb: '23px' }} />
        </Box>
      )}

      <Box>
        <Swiper
          className={classes.featuredBooks}
          slidesPerView={'auto'}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          navigation={true}
          style={{
            paddingBottom: 20,
          }}
        >
          {featuredBooks.map((book) => (
            <SwiperSlide key={'featured' + book.title + book.id}>
              <FeaturedBookItem book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
}
