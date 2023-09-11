import closeFill from '@iconify/icons-eva/close-fill';
import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import {
  SharedProps,
  VariantType,
  closeSnackbar,
  enqueueSnackbar,
  useSnackbar,
} from 'notistack';

type EnqueueSnackbar = ReturnType<typeof useSnackbar>['enqueueSnackbar'];

export const showToast = (
  message: Parameters<EnqueueSnackbar>[0],
  variant: VariantType,
  anchorOrigin?: SharedProps['anchorOrigin']
) => {
  enqueueSnackbar(message, {
    variant,
    action: (key: any) => (
      <IconButton size="small" onClick={() => closeSnackbar(key)}>
        <Icon icon={closeFill} />
      </IconButton>
    ),
    anchorOrigin,
  });
};

export const errorNotification = (error: unknown, defaultMessage?: string) => {
  if (typeof error === 'string') {
    showToast(error, 'error');
    return;
  }

  showToast(
    (error as Error)?.message || defaultMessage || 'Something went wrong',
    'error'
  );
};

export const successNotification = (message: string) => {
  showToast(message, 'success');
};
