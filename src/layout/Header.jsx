import { Avatar, Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { HeaderWrapper } from './Layout.style';
import MUIMenu from '../shared/MUIMenu';
import MUIMenuItem from '../shared/MUIMenuItem';
import MUITypography from '../shared/MUITypography';
import { Notification } from '../shared/icon';
import MUIStack from '../shared/MUIStack';
import Logo from '../assets/png/logo.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = ({ sx, handleToggleMenu }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <HeaderWrapper sx={sx} position="fixed" color="white" elevation={0}>
      <MUIStack
        direction="row"
        alignItems="center"
        color="white.main"
        sx={{
          display: { sm: 'none', xs: 'block' },
          '& img': { maxWidth: 171, display: 'block' },
        }}
      >
        <img src={Logo} alt="logo" />
      </MUIStack>
      <MUITypography
        variant="h6"
        component="h6"
        fontWeight={600}
        sx={{ display: { sm: 'block', xs: 'none' } }}
      >
        Dashboard
      </MUITypography>
      <Box sx={{ ml: 'auto' }}>
        <IconButton
          sx={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'pink.light100',
            width: 36,
            height: 36,
          }}
        >
          <Notification />
        </IconButton>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0, ml: { sm: 2, xs: 1 } }}
        >
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
        <IconButton
          sx={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'pink.light100',
            width: 36,
            height: 36,
            ml: { sm: 2, xs: 1 },
            display: { sm: 'none' },
          }}
          onClick={handleToggleMenu}
        >
          <MenuRoundedIcon />
        </IconButton>
        <MUIMenu
          sx={{ mt: '45px' }}
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MUIMenuItem key={setting} onClick={handleCloseUserMenu}>
              <MUITypography>{setting}</MUITypography>
            </MUIMenuItem>
          ))}
        </MUIMenu>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
