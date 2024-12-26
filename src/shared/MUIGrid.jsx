import { Grid2 } from '@mui/material';

const MUIGrid = ({ children, ...props }) => {
  return <Grid2 {...props}>{children}</Grid2>;
};

export default MUIGrid;
