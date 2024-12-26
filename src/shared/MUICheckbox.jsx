import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import { MUIStyled } from './MUIStyled';
import { CheckBoxChecked, CheckBoxSquare } from './icon';

const StyledFormControlLabel = MUIStyled(FormControlLabel)(({ theme }) => ({
  alignItems: 'flex-start',
  '& .MuiTypography-root': {
    color: theme.palette.gray.main,
    fontWeight: 400,
    fontSize: 14,
    marginTop: 7,
    '& a': {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
}));
const MUICheckbox = ({ label, ...props }) => {
  return (
    <FormGroup>
      <StyledFormControlLabel
        control={
          <Checkbox
            {...props}
            icon={<CheckBoxSquare />}
            checkedIcon={<CheckBoxChecked />}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default MUICheckbox;
