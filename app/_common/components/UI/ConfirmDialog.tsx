import Transition from '@/app/_common/components/UI/Transition';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';

interface CommonDialogProps {
  title: string;
  showDialog?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  closeText?: string;
  confirmText?: string;
  confirmDanger?: boolean;
  confirmLoading?: boolean;
  centered?: boolean;
}
interface MessageProps extends CommonDialogProps {
  message: string;
  component?: undefined;
}
interface ComponentProps extends CommonDialogProps {
  component: ReactNode;
  message?: undefined;
}

// Either you have a message or a component, not both.
type Props = MessageProps | ComponentProps;

export default function ConfirmDialog(props: Props) {
  const {
    title = '',
    message = '',
    component = undefined,
    showDialog = false,
    onClose,
    onConfirm,
    closeText = 'Cancel',
    confirmText = `Yes, I’m sure`,
    confirmDanger = false,
    confirmLoading = false,
    centered = false,
  } = props;

  const { medium: mediumDownwards } = useBreakPoints('down');

  return (
    <Dialog
      open={showDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          width: mediumDownwards ? '100%' : '500px',
          p: 1.5,
        },
      }}
    >
      <DialogTitle component="div">
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h5"
          fontWeight={500}
          fontSize={'1.25rem'}
          lineHeight="24px"
          align={centered ? 'center' : 'left'}
        >
          {title}
        </Typography>
      </DialogTitle>

      <DialogContent>
        {!!message && (
          <DialogContentText component="div">
            <Typography
              variant="body1"
              align={centered ? 'center' : 'left'}
              component="div"
            >
              {message}
            </Typography>
          </DialogContentText>
        )}

        {!!component && <>{component}</>}
      </DialogContent>

      <DialogActions
        sx={{ justifyContent: centered ? 'center' : 'flex-end', pb: 2 }}
      >
        {!!onClose && (
          <Button
            onClick={onClose}
            color="secondary"
            sx={{
              mr: 2,
            }}
          >
            {closeText}
          </Button>
        )}
        {!!onConfirm && (
          <LoadingButton
            variant="contained"
            loading={confirmLoading}
            onClick={() => onConfirm()}
            color={confirmDanger ? 'error' : 'primary'}
          >
            {confirmText}
          </LoadingButton>
        )}
      </DialogActions>
    </Dialog>
  );
}
