import { ListItem } from '@mui/material';
import React from 'react';

const MUIListItem = ({ children, ...props }) => {
  return <ListItem {...props}>{children}</ListItem>;
};

export default MUIListItem;
