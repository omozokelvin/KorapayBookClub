import HeartIcon from '@/app/_common/components/icons/HeartIcon';
import UsersIcon from '@/app/_common/components/icons/UsersIcon';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import { Book } from '@/app/_common/types/Book';
import { formatNumber } from '@/app/_common/utils/numbers';
import { Box, Divider, Rating, Stack, Typography } from '@mui/material';
import { CSSProperties } from 'react';

type Props = {
  height: CSSProperties['height'];
  width: CSSProperties['width'];
  book: Book;
};

export default function FeaturedBookOverlay(props: Props) {
  const { height, width, book } = props;

  const { medium: mediumDownwards } = useBreakPoints('down');

  return (
    <Box
      sx={{
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.61) 0%, #000 79.7%)',
        height: height,
        width: width,
        position: 'absolute',
        zIndex: 3,
        top: 0,
        py: '30px',
        px: mediumDownwards ? '15px' : '30px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: mediumDownwards ? 'center' : 'flex-end',
      }}
    >
      <Typography
        variant="caption"
        color={book.available ? 'primary.main' : 'error.main'}
        mb={mediumDownwards ? '7px' : '19px'}
      >
        {book.available ? 'Available' : 'Borrowed Out'}
      </Typography>

      <Typography
        variant="subtitle1"
        fontSize={mediumDownwards ? '0.875rem' : '1.125rem'}
        mb={'6px'}
        color="white"
      >
        {book.title}
      </Typography>

      <Typography
        variant="caption"
        color="white"
        component={'p'}
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {book.authors.join(', ')}
      </Typography>

      <Typography
        variant="caption"
        color="white"
        mb={mediumDownwards ? '4px' : '20px'}
        component={'p'}
      >
        {book.year}
      </Typography>

      {!mediumDownwards && (
        <>
          <Typography variant="caption" color="white" component={'p'}>
            <strong>Genre:</strong> {book.categories.join(', ')}
          </Typography>
          <Typography
            variant="caption"
            color="white"
            mb={'22px'}
            component={'p'}
          >
            <strong>Labels:</strong> {book.labels.join(', ')}
          </Typography>
        </>
      )}

      <Stack
        direction={mediumDownwards ? 'column' : 'row'}
        columnGap={'10.12px'}
        alignItems={mediumDownwards ? 'flex-start' : 'center'}
        rowGap={mediumDownwards ? '10px' : 'unset'}
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="caption" mb={'3px'} color="white">
            <strong>Ratings:</strong> {formatNumber(book.ratings)}
          </Typography>

          <Rating
            value={book.ratings}
            readOnly
            size="small"
            sx={{
              '& .MuiRating-icon': {
                fontSize: '0.875rem',
              },
            }}
          />
        </Box>

        {!mediumDownwards && <Divider orientation="vertical" flexItem />}

        <Box display={'flex'} alignItems={'center'} columnGap={'12px'}>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            rowGap={0.5}
          >
            <UsersIcon fill="#999999" />
            <Typography variant="caption" color="white">
              {book.readCount}
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            rowGap={0.5}
          >
            <HeartIcon fill="#999999" />
            <Typography variant="caption" color="white">
              {book.readCount}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
