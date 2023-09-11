import {
  Box,
  Card,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function Meetings() {
  const [selectValue, setSelectValue] = useState('month');
  return (
    <Card>
      <Stack>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" fontWeight={700}>
            Statistics of active Applications
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
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </TextField>
        </Box>
      </Stack>
    </Card>
  );
}
