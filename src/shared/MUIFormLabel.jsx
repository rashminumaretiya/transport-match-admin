import { FormLabel } from '@mui/material';
import React from 'react';

const MUIFormLabel = ({ children, ...props }) => {
  return (
    <FormLabel color="black" {...props}>
      {children}
    </FormLabel>
  );
};

export default MUIFormLabel;
