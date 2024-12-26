import { FormControl, InputAdornment, TextField as TF } from '@mui/material';
import React, { useState } from 'react';
import MUIFormLabel from './MUIFormLabel';
import { MUIStyled } from './MUIStyled';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import theme from './theme';

const TextField = MUIStyled(TF)(({ theme, position, bgColor }) => ({
  marginTop: 0,
  marginBottom: 0,
  '& .MuiInputBase-root': {
    borderRadius: 8,
    '&.MuiOutlinedInput-root .MuiInputBase-input': {
      fontSize: 14,
      lineHeight: '1.5',
      padding: '10.5px 20px',
      fontWeight: 500,
      color: theme.palette.gray.gray50,
      '&::placeholder': {
        textTransform: 'capitalize',
      },
    },
    '&.Mui-focused': {
      outline: '0',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.pink.light100,
      },
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.pink.light200,
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

const MUIPasswordField = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
      <TextField
        fullWidth
        sx={{ flex: 1, ml: props.row ? 2 : 0 }}
        {...props}
        type={showPassword ? 'text' : 'password'}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={handleClickShowPassword}
                sx={{ cursor: 'pointer' }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          },
        }}
        helperText={props.error}
      />
    </FormControl>
  );
};

export default MUIPasswordField;
