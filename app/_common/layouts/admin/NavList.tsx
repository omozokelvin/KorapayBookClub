import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

import CalendarIcon from '@/app/_common/components/icons/CalendarIcon';
import CandidateIcon from '@/app/_common/components/icons/CandidateIcon';
import CareerSiteIcon from '@/app/_common/components/icons/CareerSiteIcon';
import DashboardIcon from '@/app/_common/components/icons/DashboardIcon';
import JobIcon from '@/app/_common/components/icons/JobIcon';
import MessageIcon from '@/app/_common/components/icons/MessageIcon';
import ReferralIcon from '@/app/_common/components/icons/ReferralIcon';
import ReportIcon from '@/app/_common/components/icons/ReportIcon';
import SettingsIcon from '@/app/_common/components/icons/SettingsIcon';
import { ROUTES } from '@/app/_common/constants/routes';
import NavItem from '@/app/_common/layouts/admin/NavItem';
import { NavListItem } from '@/app/_common/types/Dashboard';
import { Box, Typography } from '@mui/material';

const listItemSx = {
  width: '16px',
  margin: 'unset',
};

const listItems: NavListItem[] = [
  {
    title: 'Menu',
    items: [
      {
        name: 'Dashboard',
        link: ROUTES.home,
        icon: (light: boolean) => <DashboardIcon light={light} />,
      },
      {
        name: 'Message',
        link: ROUTES.message,
        icon: (light: boolean) => <MessageIcon light={light} />,
      },
      {
        name: 'Calendar',
        link: ROUTES.calendar,
        icon: (light: boolean) => <CalendarIcon light={light} />,
      },
    ],
  },
  {
    title: 'Recruitment',
    items: [
      {
        name: 'Jobs',
        link: ROUTES.jobs,
        icon: (light: boolean) => <JobIcon light={light} />,
      },
      {
        name: 'Candidates',
        link: ROUTES.candidates,
        icon: (light: boolean) => <CandidateIcon light={light} />,
      },
      {
        name: 'My Referrals',
        link: ROUTES.myReferrals,
        icon: (light: boolean) => <ReferralIcon light={light} />,
      },
      {
        name: 'Career Site',
        link: ROUTES.careerSite,
        icon: (light: boolean) => <CareerSiteIcon light={light} />,
      },
    ],
  },
  {
    title: 'Organization',
    items: [
      {
        name: 'Employee',
        link: ROUTES.employee,
        icon: (light: boolean) => <CandidateIcon light={light} />,
      },
      {
        name: 'Structure',
        link: ROUTES.structure,
        icon: (light: boolean) => <ReferralIcon light={light} />,
      },
      {
        name: 'Report',
        link: ROUTES.report,
        icon: (light: boolean) => <ReportIcon light={light} />,
      },
      {
        name: 'Settings',
        link: ROUTES.settings,
        icon: (light: boolean) => <SettingsIcon light={light} />,
      },
    ],
  },
];

export default function NavList() {
  return (
    <List
      sx={{
        fontSize: '14px',
        fontWeight: '600',
        mt: 2,
      }}
    >
      <Grid
        container
        direction="column"
        sx={{
          minHeight: `calc(100vh - 95px)`,
        }}
        justifyContent="space-between"
      >
        <Grid item>
          {listItems.map((listItem) => (
            <Box
              key={listItem.title}
              display="flex"
              flexDirection="column"
              mb={3}
            >
              <Typography variant="body2" fontWeight={600} px={2} mb={1}>
                {listItem.title}
              </Typography>

              {listItem.items.map((navItem) => (
                <NavItem key={navItem.name} item={navItem} />
              ))}
            </Box>
          ))}
        </Grid>
      </Grid>
    </List>
  );
}
