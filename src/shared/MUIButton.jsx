import { Button } from '@mui/material';
import React from 'react';
import { MUIStyled } from './MUIStyled';

const StyledButton = MUIStyled(Button)(({ theme }) => ({
  padding: '12px 20px',
  fontSize: 16,
  fontWeight: 600,
  borderRadius: 8,
  lineHeight: 'normal',
  '&.MuiButton-outlined': {
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiButton-icon': {
      marginRight: '10px',
    },
  },
}));
const MUIButton = ({ children, ...props }) => {
  return (
    <StyledButton disableElevation {...props}>
      {children}
    </StyledButton>
  );
};

export default MUIButton;
