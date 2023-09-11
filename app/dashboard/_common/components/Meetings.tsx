import Meeting from '@/app/dashboard/_common/components/Meeting';
import {
  Box,
  Card,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ComponentProps, useMemo, useState } from 'react';

export default function Meetings() {
  const [selectValue, setSelectValue] = useState('new');

  const meetings: Array<ComponentProps<typeof Meeting>> = useMemo(() => {
    return [
      {
        title: 'Interview',
        meetingDate: new Date(),
        startTime: '9:00am',
        endTime: '11:30am',
      },
      {
        title: 'Interview',
        meetingDate: new Date(),
        startTime: '9:00am',
        endTime: '11:30am',
      },
      {
        title: 'Interview',
        meetingDate: new Date(),
        startTime: '9:00am',
        endTime: '11:30am',
      },
    ];
  }, []);

  return (
    <Card>
      <Stack>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" fontWeight={700}>
            Meetings
          </Typography>

          <TextField
            select
            size="small"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: 'unset',
                padding: 0,
                marginRight: 0,
                fontSize: '0.75rem',
                borderRadius: '14px',
              },
            }}
          >
            <MenuItem value="new">Create New</MenuItem>
          </TextField>
        </Box>

        <Box display="flex" flexDirection="column">
          {meetings.map((item) => (
            <Meeting
              key={item.title}
              title={item.title}
              meetingDate={item.meetingDate}
              startTime={item.startTime}
              endTime={item.endTime}
            />
          ))}
        </Box>
      </Stack>
    </Card>
  );
}
