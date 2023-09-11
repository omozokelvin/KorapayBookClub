'use client';

import SummaryCard from '@/app/_common/components/UI/SummaryCard';
import ActivityFeed from '@/app/dashboard/_common/components/ActivityFeed';
import Meetings from '@/app/dashboard/_common/components/Meetings';
import StatisticsGraph from '@/app/dashboard/_common/components/StatisticsGraph';
import { Grid } from '@mui/material';

export default function DashboardPage() {
  return (
    <Grid container columnSpacing={4} rowSpacing={3}>
      <Grid item md={12} lg={4}>
        <SummaryCard
          title="Total Applications"
          total={5672}
          sharePercentage={14}
          chartPercentage={74}
          color="success"
        />
      </Grid>

      <Grid item md={12} lg={4}>
        <SummaryCard
          title="Shortlisted Candidates"
          total={3045}
          sharePercentage={14}
          chartPercentage={74}
          color="warning"
        />
      </Grid>

      <Grid item md={12} lg={4}>
        <SummaryCard
          title="Shortlisted Candidates"
          total={3045}
          sharePercentage={14}
          chartPercentage={74}
          color="error"
        />
      </Grid>

      <Grid item xs={12}>
        <StatisticsGraph />
      </Grid>

      <Grid item xs={12} lg={7}>
        <ActivityFeed />
      </Grid>

      <Grid item xs={12} lg={5}>
        <Meetings />
      </Grid>
    </Grid>
  );
}
