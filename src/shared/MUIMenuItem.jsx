import { MenuItem } from '@mui/material';
import React from 'react';

const MUIMenuItem = ({ children, ...props }) => {
  return <MenuItem {...props}>{children}</MenuItem>;
};

export default MUIMenuItem;
