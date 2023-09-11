'use client';

import { ROUTES } from '@/app/_common/constants/routes';
import { useAuth } from '@/app/_common/contexts/AuthContext';
import {
  errorNotification,
  successNotification,
} from '@/app/_common/utils/notifications';
import { LoadingButton } from '@mui/lab';
import {
  Card,
  Chip,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as Yup from 'yup';

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const router = useRouter();

  const loginFormik = useFormik<{ email: string; password: string }>({
    enableReinitialize: false,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Email address is required')
        .email('Please provide a valid email address'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      try {
        const { email, password } = values;

        await login(email, password);

        successNotification('Login successful');

        router.push(ROUTES.home);
      } catch (error: unknown) {
        errorNotification(error);
      }

      setSubmitting(false);
    },
  });

  const {
    isValid,
    isSubmitting,
    touched,
    errors,
    getFieldProps,
    handleSubmit,
  } = loginFormik;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100vh',
      }}
    >
      <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
        <Card>
          <FormikProvider value={loginFormik}>
            <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Grid container sx={{ px: 3, pt: 5 }} rowSpacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    Login as HR
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    autoComplete="off"
                    type="email"
                    fullWidth
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    autoComplete="off"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    {...getFieldProps('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Chip
                            label={showPassword ? 'Hide' : 'Show'}
                            onClick={() => setShowPassword(!showPassword)}
                            size="small"
                          />
                        </InputAdornment>
                      ),
                    }}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid>

                <Grid item xs={12}>
                  <LoadingButton
                    disabled={!isValid}
                    loading={isSubmitting}
                    variant="contained"
                    fullWidth
                    size="large"
                    type="submit"
                    sx={{ mb: 2 }}
                  >
                    Login
                  </LoadingButton>
                </Grid>
              </Grid>
            </Form>
          </FormikProvider>
        </Card>
      </Grid>
    </Grid>
  );
}
