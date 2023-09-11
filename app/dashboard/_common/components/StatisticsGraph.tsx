import theme from '@/app/_common/theme/theme';
import {
  Box,
  Card,
  FormControlLabel,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Jan',
    wv: 20,
    uv: 30,
    pv: 50,
    amt: 100,
  },
  {
    name: 'Feb',
    wv: 30,
    uv: 30,
    pv: 50,
    amt: 110,
  },
  {
    name: 'Mar',
    wv: 10,
    uv: 20,
    pv: 30,
    amt: 70,
  },
  {
    name: 'Apr',
    wv: 20,
    uv: 25,
    pv: 35,
    amt: 80,
  },
  {
    name: 'May',
    wv: 20,
    uv: 30,
    pv: 50,
    amt: 100,
  },
  {
    name: 'Jun',
    wv: 20,
    uv: 25,
    pv: 35,
    amt: 80,
  },
  {
    name: 'July',
    wv: 30,
    uv: 30,
    pv: 50,
    amt: 110,
  },
  {
    name: 'Aug',
    wv: 20,
    uv: 30,
    pv: 50,
    amt: 100,
  },
  {
    name: 'Sep',
    wv: 20,
    uv: 20,
    pv: 20,
    amt: 60,
  },
  {
    name: 'Oct',
    wv: 40,
    uv: 15,
    pv: 50,
    amt: 105,
  },
  {
    name: 'Nov',
    wv: 20,
    uv: 30,
    pv: 40,
    amt: 90,
  },
  {
    name: 'Dec',
    wv: 30,
    uv: 10,
    pv: 20,
    amt: 60,
  },
];

export default function StatisticsGraph() {
  const [selectValue, setSelectValue] = useState('month');
  return (
    <Card>
      <Stack>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" fontWeight={700}>
            Statistics of active Applications
          </Typography>

          <Box display="flex" alignItems="center" columnGap={4}>
            <Box display="flex" columnGap={2}>
              <FormControlLabel
                control={<Switch defaultChecked size="small" color="primary" />}
                label="Applications"
              />
              <FormControlLabel
                control={<Switch defaultChecked size="small" color="warning" />}
                label="Shortlisted"
              />
              <FormControlLabel
                control={<Switch defaultChecked size="small" color="error" />}
                label="Rejected"
              />
            </Box>

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
        </Box>

        <ResponsiveContainer width={'100%'} height={450}>
          <BarChart
            data={data}
            margin={{
              right: 20,
              left: 20,
            }}
            barSize={12}
            style={{
              stroke: '#fff',
              strokeWidth: 4,
            }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding="gap"
              style={{ fontWeight: 600 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[20, 40, 60, 80, 100]}
              tickFormatter={(item) => item + '%'}
            />

            <Bar
              dataKey="pv"
              stackId="a"
              fill={theme.palette.info.main}
              radius={10}
            />
            <Bar
              dataKey="uv"
              stackId="a"
              fill={theme.palette.warning.main}
              radius={10}
            />
            <Bar
              dataKey="wv"
              stackId="a"
              fill={theme.palette.error.main}
              radius={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </Stack>
    </Card>
  );
}
