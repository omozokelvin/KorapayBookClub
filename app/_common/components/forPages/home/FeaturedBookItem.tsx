import BgShadow from '@/app/_common/components/backgrounds/BgShadow';
import FeaturedBookOverlay from '@/app/_common/components/forPages/home/FeaturedBookOverlay';
import CloseIcon from '@/app/_common/components/icons/CloseIcon';
import MoreOptionsIcon from '@/app/_common/components/icons/MoreOptionsIncon';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import { Book } from '@/app/_common/types/Book';
import { getBookLink } from '@/app/_common/utils/book';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  book: Book;
};

export default function FeaturedBookItem(props: Props) {
  const { book } = props;
  const { medium: mediumDownwards } = useBreakPoints('down');

  const height = mediumDownwards ? 210 : 330;
  const width = mediumDownwards ? 140 : 220;

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
      }}
      onMouseEnter={() => {
        if (mediumDownwards) {
          return;
        }

        setShowOverlay(true);
      }}
      onMouseLeave={() => {
        if (mediumDownwards) {
          return;
        }

        setShowOverlay(false);
      }}
    >
      <BgShadow
        style={{
          position: 'absolute',
          zIndex: 1,
          left: -25,
          bottom: -40,
          zoom: 0.95,
        }}
      />

      <Image
        height={height}
        width={width}
        src={getBookLink(book.imageUrl)}
        alt={book.title}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      />

      {showOverlay && (
        <FeaturedBookOverlay height={height} width={width} book={book} />
      )}

      {mediumDownwards && (
        <IconButton
          sx={{
            p: 0,
            width: 27,
            height: 27,
            position: 'absolute',
            zIndex: 4,
            backgroundColor: showOverlay ? 'unset' : 'white',
            top: 10,
            right: 10,
          }}
          onClick={() => {
            setShowOverlay((current) => !current);
          }}
        >
          {showOverlay ? <CloseIcon /> : <MoreOptionsIcon />}
        </IconButton>
      )}
    </Box>
  );
}
