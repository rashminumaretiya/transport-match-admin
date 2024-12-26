import { Typography } from '@mui/material';
import React from 'react';

const MUITypography = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default MUITypography;
