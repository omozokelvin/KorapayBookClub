'use client';
import {
  CheckCircleRounded,
  ErrorRounded,
  InfoRounded,
  ReportProblemRounded,
} from '@mui/icons-material';
import { Box, Theme, alpha, styled } from '@mui/material';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';

export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

type SnackbarIconProps = {
  icon: ReactNode;
  color: ColorSchema;
};

function SnackbarIcon({ icon, color }: SnackbarIconProps) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
      }}
    >
      {icon}
    </Box>
  );
}

const StyledMaterialDesignContent = styled(MaterialDesignContent)((props: {
  theme: Theme;
}) => {
  const theme = props.theme;

  const createStyle = {
    color: `${theme.palette.text.primary} !important`,
    backgroundColor: `${theme.palette.background.paper} !important`,
    width: '100%',
    paddingInline: theme.spacing(1.5),
    margin: theme.spacing(0.25, 0),
    boxShadow: theme.shadows[10],
    borderRadius: theme.shape.borderRadius,
  };

  return {
    '&.notistack-MuiContent-success': {
      ...createStyle,
    },
    '&.notistack-MuiContent-error': {
      ...createStyle,
    },
    '&.notistack-MuiContent-info': {
      ...createStyle,
    },
    '&.notistack-MuiContent-warning': {
      ...createStyle,
    },
  };
});

type Props = {
  children: ReactNode;
};

export default function NotistackProvider(props: Props) {
  const { children } = props;
  return (
    <SnackbarProvider
      dense
      maxSnack={5}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      iconVariant={{
        success: <SnackbarIcon icon={<CheckCircleRounded />} color="success" />,
        error: <SnackbarIcon icon={<InfoRounded />} color="error" />,
        warning: <SnackbarIcon icon={<ErrorRounded />} color="warning" />,
        info: <SnackbarIcon icon={<ReportProblemRounded />} color="info" />,
      }}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
