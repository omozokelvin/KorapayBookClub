import { styled } from '@mui/material';

import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 10,
    boxShadow: theme.shadows[1],
    color: theme.palette.text.secondary,
  },
  [`& .MuiTooltip-arrow`]: {
    color: theme.palette.common.white,
  },
}));

export default LightTooltip;
