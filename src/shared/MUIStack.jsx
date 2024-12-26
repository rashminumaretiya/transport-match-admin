import { Stack } from '@mui/system';
import React from 'react';

const MUIStack = ({ children, ...props }) => {
  return <Stack {...props}>{children}</Stack>;
};

export default MUIStack;
