import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Typography } from '@mui/material';
import { format } from 'date-fns';

type Props = {
  title: string;
  startTime: string;
  endTime: string;
  meetingDate: Date;
};

export default function Meeting(props: Props) {
  const { title, startTime, endTime, meetingDate } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      columnGap={3}
      justifyContent="space-between"
      my={2}
    >
      <Box display="flex" alignItems="center" columnGap={2}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          sx={{
            boxShadow: '3px 6px 10px rgba(0, 0, 0, 0.05)',
            padding: 2,
            width: '60px',
            height: '60px',
            borderRadius: '14px',
          }}
        >
          <Typography variant="body2" color="warning.main" fontWeight={700}>
            {format(meetingDate, 'MMM')}
          </Typography>
          <Typography variant="body2" color="grey.300" fontWeight={700}>
            {format(meetingDate, 'dd')}
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="body2" color="grey.200" fontWeight={700}>
            {title}
          </Typography>

          <Box>
            <Typography variant="body2" color="grey.200">
              {startTime} - {endTime}
            </Typography>
          </Box>
        </Box>
      </Box>

      <IconButton sx={{ backgroundColor: '#f5f6fa', borderRadius: '12px' }}>
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
}
