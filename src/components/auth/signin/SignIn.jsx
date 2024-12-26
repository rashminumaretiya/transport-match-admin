import React from 'react';
import MUIStack from '../../../shared/MUIStack';
import MUITypography from '../../../shared/MUITypography';
import RouteLink from '../../../shared/RouteLink';
import logo from '../../../assets/svg/logo.svg';
import MUIForm from '../../../shared/MUIForm';
import MUITextField from '../../../shared/MUITextField';
import { IconButton, InputAdornment } from '@mui/material';
import { Email, EyeOff, EyeOn, Lock } from '../../../shared/icon';
import { authStyle } from '../../../layout/auth.style';
import MUICheckbox from '../../../shared/MUICheckbox';
import MUIButton from '../../../shared/MUIButton';

const SignIn = () => {
  const classes = authStyle();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <MUIStack className={classes.authWrapper}>
        <MUIStack m="auto">
          <img className={classes.logoWrapper} src={logo} alt="logo" />
          <MUITypography variant="h3" color="black.main" mb={1}>
            Sign In to your Account
          </MUITypography>
          <MUITypography
            variant="body1"
            mb={3}
            color="gray.main"
            fontWeight={500}
          >
            Welcome back! please enter your detail
          </MUITypography>
          <MUIForm>
            <MUITextField
              placeholder="Email"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <MUITextField
              placeholder="Password"
              type={showPassword ? 'password' : 'text'}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <EyeOff /> : <EyeOn />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <MUIStack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <MUICheckbox label="Remember me" />
              <MUITypography className={classes.forgotLink}>
                <RouteLink to="/forgot-password">Forgot Password?</RouteLink>
              </MUITypography>
            </MUIStack>
            <MUIButton variant="contained" fullWidth>
              Sign In
            </MUIButton>
          </MUIForm>
          <MUITypography
            color="gray.main"
            variant="body2"
            className={classes.pageLink}
          >
            Don't have an account?<RouteLink to="/signup">Sign up</RouteLink>
          </MUITypography>
        </MUIStack>
      </MUIStack>
    </>
  );
};

export default SignIn;
