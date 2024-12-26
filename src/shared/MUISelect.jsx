import { FormControl, Select } from '@mui/material';
import React from 'react';
import { MUIStyled } from './MUIStyled';
import IMSMenuItem from './IMSMenuItem';
import MUIFormLabel from './MUIFormLabel';

const SelectStyle = MUIStyled(Select)(({ theme }) => ({
  '& .MuiSelect-outlined': {
    padding: 9,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#e3e3e3',
  },
}));
const MUISelect = ({ menu, formLabel, ...props }) => {
  return (
    <FormControl
      fullWidth
      sx={{
        display: 'flex',
        flexDirection: props.row ? 'row' : 'column',
        alignItems: props.row ? 'center' : 'flex-start',
        mb: props.gutterNone ? 0 : 2.5,
      }}
    >
      {formLabel && (
        <MUIFormLabel
          sx={{ minWidth: 120, maxWidth: 120, mb: !props.row ? 0.5 : 0 }}
        >
          {formLabel}
        </MUIFormLabel>
      )}
      <SelectStyle fullWidth {...props}>
        {menu?.map((item, i) => (
          <IMSMenuItem key={i} value={item}>
            {item}
          </IMSMenuItem>
        ))}
      </SelectStyle>
    </FormControl>
  );
};

export default MUISelect;
