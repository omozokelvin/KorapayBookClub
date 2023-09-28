import HeartIcon from '@/app/_common/components/icons/HeartIcon';
import MoreOptionsIcon from '@/app/_common/components/icons/MoreOptionsIncon';
import UsersIcon from '@/app/_common/components/icons/UsersIcon';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import { Book } from '@/app/_common/types/Book';
import { getBookLink } from '@/app/_common/utils/book';
import { formatNumber } from '@/app/_common/utils/numbers';
import {
  Box,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';

type Props = {
  book: Book;
  showOptions?: boolean;
};
export default function SingleBook(props: Props) {
  const { book, showOptions = false } = props;

  const { medium: mediumDownwards } = useBreakPoints('down');

  return (
    <Stack
      direction={'row'}
      columnGap={'11.33px'}
      alignItems={'center'}
      sx={{
        ...(!mediumDownwards && {
          ':hover': {
            backgroundColor: 'white',
            filter: 'drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.15))',
          },
        }),
      }}
    >
      <Image
        width={mediumDownwards ? 103.695 : 106.667}
        height={160}
        src={getBookLink(book.imageUrl)}
        alt={book.title}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <Stack flex={1}>
        <Box
          display={'flex'}
          justifyContent="space-between"
          alignItems={'flex-end'}
          mb={'12px'}
        >
          <Typography
            variant="caption"
            color={book.available ? 'primary.main' : 'error.main'}
          >
            {book.available ? 'Available' : 'Borrowed Out'}
          </Typography>

          {book.hasOptions && showOptions && (
            <IconButton
              sx={{
                p: 0,
                width: 27,
                height: 27,
              }}
            >
              <MoreOptionsIcon />
            </IconButton>
          )}
        </Box>

        <Typography variant="subtitle2" mb={'3px'}>
          {book.title}
        </Typography>

        <Typography variant="caption" mb={'3px'}>
          {book.authors.join(',') + (book?.year ? ' - ' + book.year : '')}
        </Typography>

        <Typography variant="caption" mb={'9px'}>
          {book.categories.join(', ')}
        </Typography>

        <Stack direction="row" columnGap={'10.12px'} alignItems={'center'}>
          <Box display="flex" flexDirection="column">
            <Typography variant="caption" mb={'3px'}>
              Ratings: {formatNumber(book.ratings)}
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

          <Divider orientation="vertical" flexItem />

          <Box display={'flex'} alignItems={'center'} columnGap={'12px'}>
            <Box
              display="flex"
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              rowGap={0.5}
            >
              <UsersIcon />
              <Typography variant="caption">{book.readCount}</Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              rowGap={0.5}
            >
              <HeartIcon />
              <Typography variant="caption">{book.readCount}</Typography>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
