import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Dashboard,
  EmployeeManagement,
  GroupManagement,
  Help,
  Integrations,
  Report,
  Schedule,
  Settings,
} from '../shared/icon';
import { SidebarWrapper } from './Layout.style';
import MUIStack from '../shared/MUIStack';
import MUITypography from '../shared/MUITypography';
import MUIList from '../shared/MUIList';
import MUIListItem from '../shared/MUIListItem';
import Logo from '../assets/png/logo.png';
import MUIButton from '../shared/MUIButton';
import { Divider } from '@mui/material';
import CustomScrollbar from '../shared/CustomScrollbar';

const menuList = [
  {
    menu: 'Dashboard',
    icon: <Dashboard />,
    link: '/dashboard',
  },
  {
    menu: 'Schedule',
    icon: <Schedule />,
    link: '/schedule',
  },
  {
    menu: 'Employee Management',
    icon: <EmployeeManagement />,
    link: '/employee-management',
  },
  {
    menu: 'Group Management',
    icon: <GroupManagement />,
    link: '/group-management',
  },
  {
    menu: 'Report',
    icon: <Report />,
    link: '/report',
  },
];
const secondMenuList = [
  {
    menu: 'Settings',
    icon: <Settings />,
    link: '/settings',
  },
  {
    menu: 'Integrations & apps',
    icon: <Integrations />,
    link: '/integrations-apps',
  },
  {
    menu: 'Help',
    icon: <Help />,
    link: '/help',
  },
];

const Sidebar = ({ sx, mainMenu }) => {
  const location = useLocation();
  return (
    <SidebarWrapper sx={sx} mainMenu={mainMenu}>
      <MUIStack
        direction="row"
        alignItems="center"
        padding="0.969rem"
        color="white.main"
        sx={{
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderColor: 'pink.light100',
          '& img': { maxWidth: 171, display: 'block' },
        }}
      >
        <img src={Logo} alt="logo" />
      </MUIStack>
      <MUIStack sx={{ overflowY: 'auto', flex: 1 }}>
        <CustomScrollbar>
          <MUIList>
            {menuList.map((item, i) => {
              return (
                <MUIListItem key={i}>
                  <Link
                    to={item.link}
                    className={location.pathname === item.link ? 'active' : ''}
                  >
                    {item.icon}
                    <MUITypography component="span">{item.menu}</MUITypography>
                  </Link>
                </MUIListItem>
              );
            })}
          </MUIList>
          <Divider sx={{ mx: 3, my: 1 }} />
          <MUIList>
            {secondMenuList.map((item, i) => {
              return (
                <MUIListItem key={i}>
                  <Link
                    to={item.link}
                    className={location.pathname === item.link ? 'active' : ''}
                  >
                    {item.icon}
                    <MUITypography component="span">{item.menu}</MUITypography>
                  </Link>
                </MUIListItem>
              );
            })}
          </MUIList>
        </CustomScrollbar>
      </MUIStack>
      <MUIStack
        backgroundColor="primary.main"
        borderRadius={2}
        p={1.5}
        mx={2}
        mb={3}
        mt="auto"
      >
        <MUITypography variant="body2" color="white" fontWeight={600} mb={1}>
          Upgrade your subscription
        </MUITypography>
        <MUITypography variant="body2" color="#FFFFFFBA" mb={2} fontSize={12}>
          Get even more of the Roostergemak features you need.
        </MUITypography>
        <MUIButton sx={{ borderRadius: 2 }} variant="contained" color="white">
          Upgrade
        </MUIButton>
      </MUIStack>
    </SidebarWrapper>
  );
};

export default Sidebar;
