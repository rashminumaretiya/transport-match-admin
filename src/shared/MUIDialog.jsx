import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React from 'react';
import { Close } from './icon';
import { MUIStyled } from './MUIStyled';

const StyledDialog = MUIStyled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 16,
  },
}));

const MUIDialog = ({
  title,
  open,
  children,
  handleClose,
  closeIcon,
  ...props
}) => {
  return (
    <StyledDialog open={open} onClose={handleClose} fullWidth {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {closeIcon && (
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <Close />
        </IconButton>
      )}
      <DialogContent dividers>{children}</DialogContent>
    </StyledDialog>
  );
};

export default MUIDialog;
