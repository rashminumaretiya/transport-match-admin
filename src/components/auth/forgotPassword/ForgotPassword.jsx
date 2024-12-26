import { InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { authStyle } from '../../../layout/auth.style';
import { Email } from '../../../shared/icon';
import MUIButton from '../../../shared/MUIButton';
import MUIForm from '../../../shared/MUIForm';
import MUIStack from '../../../shared/MUIStack';
import MUITextField from '../../../shared/MUITextField';
import MUITypography from '../../../shared/MUITypography';
import RouteLink from '../../../shared/RouteLink';
import MUIDialog from '../../../shared/MUIDialog';
import logo from '../../../assets/svg/logo.svg';

const ForgotPassword = () => {
  const classes = authStyle();
  const [verifyEmail, setVerifyEmail] = useState(false);
  const handleVerifyEmail = () => {
    setVerifyEmail(true);
  };
  return (
    <>
      <MUIStack className={classes.authWrapper}>
        <MUIStack>
          <MUITypography variant="h3" color="black.main" mb={1}>
            Forgot Password
          </MUITypography>
          <MUITypography
            variant="body1"
            mb={3}
            color="gray.main"
            fontWeight={500}
          >
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </MUITypography>
          <MUIForm>
            <MUITextField
              placeholder="Enter email"
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
            <MUIButton
              variant="contained"
              fullWidth
              onClick={handleVerifyEmail}
            >
              Continue
            </MUIButton>
          </MUIForm>
          <MUITypography
            color="gray.main"
            variant="body2"
            className={classes.pageLink}
          >
            <RouteLink to="/signin">Back to Sign In</RouteLink>
          </MUITypography>
          <MUITypography
            color="gray.main"
            variant="body2"
            className={classes.pageLink}
          >
            Don't have an account?<RouteLink to="/signup">Sign up</RouteLink>
          </MUITypography>
        </MUIStack>
      </MUIStack>
      <MUIDialog open={verifyEmail} maxWidth="xs">
        <MUIStack className={classes.verifyEmailWrapper}>
          <img className={classes.logoWrapper} src={logo} alt="logo" />
          <MUITypography variant="h5" color="black.main" mb={1}>
            Verify your Email
          </MUITypography>
          <MUITypography variant="body2" color="gray.main" mb={3}>
            Thank you, check your email for instructions to reset your password
          </MUITypography>
          <MUIButton variant="contained" fullWidth>
            Skip
          </MUIButton>
          <MUITypography
            color="gray.main"
            variant="body2"
            className={classes.pageLink}
          >
            Don’t receive an email? <RouteLink to="/signin">Resend</RouteLink>
          </MUITypography>
        </MUIStack>
      </MUIDialog>
    </>
  );
};

export default ForgotPassword;
