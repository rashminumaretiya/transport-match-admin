import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import MUIFormLabel from './MUIFormLabel';

const MUIRadioGroup = ({ list, ...props }) => {
  return (
    <FormControl sx={{ mb: 2.5 }}>
      <MUIFormLabel>{props.formLabel}</MUIFormLabel>
      <RadioGroup
        sx={{ mt: 0.5 }}
        row
        defaultValue={props.defaultValue}
        name={props.name}
      >
        {list.map((item, i) => (
          <FormControlLabel
            key={i}
            value={item.value}
            control={<Radio />}
            label={item.label}
            onChange={props.onChange}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default MUIRadioGroup;
