import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import MUIStack from '../shared/MUIStack';
import MUITypography from '../shared/MUITypography';
import MUIButton from '../shared/MUIButton';
import { MUIStyled } from '../shared/MUIStyled';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from '@mui/material';
import offeringImage1 from '../assets/png/offering-img-1.png';
import offeringImage2 from '../assets/png/offering-img-2.png';
import CustomScrollbar from '../shared/CustomScrollbar';

const Offering = MUIStyled(MUIStack)(({ theme }) => ({
  height: 40,
  backgroundColor: theme.palette.primary.main,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 24px',
  [theme.breakpoints.down('lg')]: {
    padding: '8px 15px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  '&:before': {
    content: "''",
    backgroundImage: `url(${offeringImage1})`,
    backgroundRepeat: 'no-repeat',
    height: 40,
    width: 364,
    position: 'absolute',
    left: 0,
    top: 0,
    pointerEvents: 'none',
  },
  '&:after': {
    content: "''",
    backgroundImage: `url(${offeringImage2})`,
    backgroundRepeat: 'no-repeat',
    height: 40,
    width: 364,
    position: 'absolute',
    right: '2%',
    top: 0,
    pointerEvents: 'none',
    [theme.breakpoints.down('lg')]: {
      right: 0,
    },
  },
  '& .MuiButtonBase-root ': {
    marginLeft: 5,
    borderRadius: 30,
    fontSize: 10,
    flex: 'none',
  },
  '& .MuiIconButton-root': {
    backgroundColor: `${theme.palette.white.main}4D`,
  },
}));
const Layout = () => {
  const [mainMenu, setMainMenu] = useState(false);
  const [offeringToggle, setOfferingToggle] = useState(true);
  const handleOffering = () => {
    setOfferingToggle(false);
  };
  const handleToggleMenu = () => {
    setMainMenu(!mainMenu);
  };

  return (
    <>
      <MUIStack>
        {offeringToggle && (
          <Offering direction="row">
            <MUIStack
              direction="row"
              mx="auto"
              alignItems="center"
              flex={1}
              justifyContent="center"
              zIndex={9}
            >
              <MUITypography
                variant="body2"
                fontSize={{ md: 14, xs: 12 }}
                color="white"
                fontWeight={600}
              >
                Upgrade to Pro and Maximize Your Hours!! ⚡️ Get 10% Discount
                for all plan.
              </MUITypography>
              <MUIButton variant="contained" color="black">
                Get Now
              </MUIButton>
            </MUIStack>
            <IconButton
              onClick={handleOffering}
              sx={{ width: 24, height: 24 }}
              color="white"
            >
              <CloseRoundedIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Offering>
        )}
        <Header
          handleToggleMenu={handleToggleMenu}
          sx={{ top: { sm: offeringToggle ? 40 : 0 } }}
        />
        <Sidebar
          mainMenu={mainMenu}
          sx={{ top: { sm: offeringToggle ? 40 : 0 } }}
        />
        <MUIStack
          sx={{
            ml: { sm: 31.25 },
            mt: 8,
            height: 'calc(100vh - 104px)',
          }}
          p={1}
        >
          <CustomScrollbar>
            <MUIStack p={2}>
              <Outlet />
            </MUIStack>
          </CustomScrollbar>
        </MUIStack>
      </MUIStack>
    </>
  );
};

export default Layout;
