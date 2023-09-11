import SearchIcon from '@/app/_common/components/icons/SearchIcon';
import { useAuth } from '@/app/_common/contexts/AuthContext';
import { Box, Stack, TextField, Typography } from '@mui/material';

export default function TopBar() {
  const { user } = useAuth();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={4}
    >
      <Box>
        <Typography variant="h5" fontWeight={700} color="grey.200">
          Dashboard
        </Typography>
        <Typography variant="subtitle1" fontWeight={600} color="grey.300">
          Hello, {user?.firstName}, welcome to Galucter
        </Typography>
      </Box>

      <TextField
        placeholder="Search by anything"
        variant="outlined"
        sx={{
          width: '400px',
          borderRadius: '16px',
          backgroundColor: 'white',
          '& fieldset': { border: 'none' },
          '& .MuiOutlinedInput-input': {
            padding: 0,
          },
          '& .MuiOutlinedInput-root': {
            height: 'unset',
            padding: 0,
            marginRight: 0,
            paddingLeft: '16px',
          },
        }}
        InputProps={{
          endAdornment: (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'primary.main',
                height: '48px',
                width: '60px',
                borderTopRightRadius: '16px',
                borderBottomRightRadius: '16px',
              }}
            >
              <SearchIcon light />
            </Box>
          ),
        }}
      />
    </Stack>
  );
}
