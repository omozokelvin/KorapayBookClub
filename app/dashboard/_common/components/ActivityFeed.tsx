import Activity from '@/app/dashboard/_common/components/Activity';
import {
  Box,
  Card,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { subHours, subMinutes } from 'date-fns';
import { ComponentProps, useMemo, useState } from 'react';

export default function ActivityFeed() {
  const [selectValue, setSelectValue] = useState('all');

  const activities: Array<ComponentProps<typeof Activity>> = useMemo(() => {
    return [
      {
        fullName: 'Marvin Mckinney',
        activity: 'APPLYING',
        activityDate: subMinutes(new Date(), 3),
        image: '/public/images/avatar-1.svg',
        role: 'Product Designer',
      },
      {
        fullName: 'Jone Copper',
        activity: 'SIGNUP',
        activityDate: subHours(new Date(), 4),
        image: '/public/images/avatar-2.svg',
        role: 'Job Hunt',
      },
      {
        fullName: 'Jone Copper',
        activity: 'APPLYING',
        activityDate: subMinutes(new Date(), 10),
        image: '/public/images/avatar-3.svg',
        role: 'Job Hunt',
      },
    ];
  }, []);
  return (
    <Card>
      <Stack>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" fontWeight={700}>
            Activity Feed
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
            <MenuItem value="all">All Activity</MenuItem>
          </TextField>
        </Box>

        <Box display="flex" flexDirection="column">
          {activities.map((item) => (
            <Activity
              fullName={item.fullName}
              activity={item.activity}
              activityDate={item.activityDate}
              image={item.image}
              role={item.role}
            />
          ))}
        </Box>
      </Stack>
    </Card>
  );
}
