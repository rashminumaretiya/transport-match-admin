import { FormControl, TextField as TF } from '@mui/material';
import React from 'react';
import { MUIStyled } from './MUIStyled';
import MUIFormLabel from './MUIFormLabel';
import theme from './theme';

const TextField = MUIStyled(TF)(({ theme, position, bgColor }) => ({
  marginTop: 0,
  marginBottom: 0,
  '& .MuiInputBase-root': {
    borderRadius: 12,
    backgroundColor: theme.palette.gray.light,
    '&.MuiOutlinedInput-root': { 
      '& .MuiInputBase-input': {
        padding: 16,
        fontWeight: 500,
        color: theme.palette.black.main,
        '&::placeholder': {
          textTransform: 'capitalize',
        },
      },
      '& .MuiInputAdornment-root': {
        marginRight: 0
      }
    },
    '&.Mui-focused': {
      outline: '0',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiFormHelperText-root': {
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    '& svg': {
      width: 15,
      height: 15,
      verticalAlign: 'middle',
    },
  },
}));

const MUITextField = ({ ...props }) => {
  return (
    <FormControl
      fullWidth
      sx={{
        mb: 2,
        '& .MuiFormLabel-root': {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '1.5',
          color: theme.palette.secondary.main,
          marginBottom: 0.5,
          width: 'fit-content',
        },
      }}
    >
      {props.formLabel && <MUIFormLabel>{props.formLabel}</MUIFormLabel>}
      <TextField fullWidth {...props} helperText={props.error} />
    </FormControl>
  );
};

export default MUITextField;