import { Menu } from '@mui/material';
import React from 'react';

const MUIMenu = ({ children, ...props }) => {
  return <Menu {...props}>{children}</Menu>;
};

export default MUIMenu;
