import { List } from '@mui/material';
import React from 'react';

const MUIList = ({ children, ...props }) => {
  return <List {...props}>{children}</List>;
};

export default MUIList;
