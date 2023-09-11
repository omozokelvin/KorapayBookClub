import { Avatar, Box, Chip, Typography, alpha } from '@mui/material';
import { formatDistance } from 'date-fns';

type Props = {
  fullName: string;
  activity: 'APPLYING' | 'SIGNUP';
  activityDate: Date;
  image: string;
  role: string;
};

export default function Activity(props: Props) {
  const { fullName, activity, activityDate, role, image } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      columnGap={3}
      justifyContent="space-between"
      my={2}
    >
      <Box display="flex" alignItems="center" columnGap={1}>
        <Avatar alt={fullName} src={image} />
        <Box>
          <Box display="flex" columnGap={0.5}>
            <Typography variant="body2" color="grey.400" fontWeight={700}>
              {fullName}
            </Typography>
            <Typography variant="body2" color="grey.400">
              {activity === 'APPLYING'
                ? ' applied for the job '
                : ' Created new account as a '}
            </Typography>
            <Typography variant="body2" fontWeight={700} color="grey.400">
              {role}
            </Typography>
          </Box>

          <Typography>
            {formatDistance(activityDate, new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
      </Box>

      <Chip
        label={activity === 'APPLYING' ? 'Applying' : 'SIGNUP'}
        sx={{
          justifySelf: 'flex-end',
          fontSize: '0.75rem',
          fontWeight: 700,
          backgroundColor: (theme) =>
            alpha(
              theme.palette[activity === 'APPLYING' ? 'info' : 'success'].main,
              0.1
            ),
          color: activity === 'APPLYING' ? 'info.main' : 'success.main',
        }}
      />
    </Box>
  );
}
