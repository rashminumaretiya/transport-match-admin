import React from 'react';
import MUIStack from '../../../shared/MUIStack';
import MUITypography from '../../../shared/MUITypography';
import RouteLink from '../../../shared/RouteLink';
import logo from '../../../assets/svg/logo.svg';
import MUIForm from '../../../shared/MUIForm';
import MUITextField from '../../../shared/MUITextField';
import { IconButton, InputAdornment } from '@mui/material';
import { Email, EyeOff, EyeOn, Lock, User } from '../../../shared/icon';
import { authStyle } from '../../../layout/auth.style';
import MUIButton from '../../../shared/MUIButton';
import MUICheckbox from '../../../shared/MUICheckbox';
import MUIBox from '../../../shared/MUIBox';

const SignUp = () => {
  const classes = authStyle();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <MUIStack className={classes.authWrapper}>
        <MUIStack m="auto">
          <img className={classes.logoWrapper} src={logo} alt="logo" />
          <MUITypography variant="h3" color="black.main" mb={3}>
            Sign Up for an Account
          </MUITypography>
          <MUIForm>
            <MUITextField
              placeholder="Username"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <User />
                    </InputAdornment>
                  ),
                },
              }}
            />
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
            <MUITypography mb={1} color="gray.main" variant="body2">
              Your password must have at least 8 characters
            </MUITypography>
            <MUIBox mb={3}>
              <MUICheckbox
                label={
                  <>
                    By creating an account means you agree to the{' '}
                    <RouteLink>Terms & Conditions</RouteLink> and our{' '}
                    <RouteLink>Privacy Policy</RouteLink>
                  </>
                }
              />
            </MUIBox>
            <MUIButton variant="contained" fullWidth>
              Sign Up
            </MUIButton>
          </MUIForm>
          <MUITypography
            color="gray.main"
            variant="body2"
            className={classes.pageLink}
          >
            Already have an account?<RouteLink to="/signin">Sign in</RouteLink>
          </MUITypography>
        </MUIStack>
      </MUIStack>
    </>
  );
};

export default SignUp;
