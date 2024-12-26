import { Box } from '@mui/system';
import React from 'react';

const MUIBox = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default MUIBox;
