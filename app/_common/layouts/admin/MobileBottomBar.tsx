import CandidateIcon from '@/app/_common/components/icons/CandidateIcon';
import DashboardIcon from '@/app/_common/components/icons/DashboardIcon';
import JobIcon from '@/app/_common/components/icons/JobIcon';
import { ROUTES } from '@/app/_common/constants/routes';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

type Props = {
  onOpenSidebar: () => void;
};

const MENU_ITEMS = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon light={false} />,
    link: ROUTES.home,
  },
  {
    title: 'Jobs',
    icon: <JobIcon light={false} />,
    link: ROUTES.jobs,
  },
  {
    title: 'Employee',
    icon: <CandidateIcon light={false} />,
    link: ROUTES.employee,
  },
  {
    title: 'More',
    icon: <MoreVertOutlinedIcon sx={{ width: '16px' }} />,
    link: '',
  },
];

export default function MobileBottomBar(props: Props) {
  const { onOpenSidebar } = props;
  const router = useRouter();

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: (theme) => theme.palette.common.white,
        borderTop: '1px solid #DFE3E8',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {MENU_ITEMS.map((item, index) => (
          <IconButton
            key={index}
            sx={{
              color: (theme) => theme.palette.grey[600],
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => {
              if (item.link) {
                onOpenSidebar();
                return;
              }

              router.push(item.link);
            }}
          >
            <>{item.icon}</>

            <Typography fontSize="0.75rem" fontWeight={600}>
              {item.title}
            </Typography>
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  );
}
