import { Button } from '@mui/material';
import React from 'react';
import { MUIStyled } from './MUIStyled';

const StyledButton = MUIStyled(Button)(({ theme }) => ({
  padding: '9.5px 20px',
  '&.MuiButton-contained': {
    borderRadius: '8px',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '1.5',
    width: '100%',
  },
  '&.MuiButton-outlined': {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '1.5',
    padding: '7px 20px',
    width: '100%',
    color: 'black !important',
    textTransform: 'none',
    border: `1px solid ${theme.palette.pink.light100}`,
    borderRadius: 8,
    backgroundColor: 'transparent',
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
