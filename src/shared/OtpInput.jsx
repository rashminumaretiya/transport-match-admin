import React from 'react';
import OTPInput from 'react-otp-input';
import MUIStack from './MUIStack';
import theme from './theme';

const OtpInput = ({ otp, setOtp }) => {
  return (
    <MUIStack
      sx={{
        '& >  div': {
          justifyContent: 'center',
        },
        '& input': {
          height: { xs: 38, xxs: 55, lg: 65 },
          width: {
            xs: '38px !important',
            xxs: '55px !important',
            lg: '65px !important',
          },
          margin: '0 5px', // Optional spacing between inputs
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: 30,
          color: theme.palette.primary.main,
          fontWeight: 500,
          '&:focus-visible': {
            outlineColor: theme.palette.primary.main,
          },
          appearance: 'none',
          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            appearance: 'none',
            margin: 0,
          },
          '&[type=number]': {
            appearance: 'none',
          },
        },
      }}
    >
      <OTPInput
        inputType="number"
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
      />
    </MUIStack>
  );
};

export default OtpInput;
