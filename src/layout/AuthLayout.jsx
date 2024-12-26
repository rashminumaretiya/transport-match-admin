import React from 'react';
import { Outlet } from 'react-router-dom';
import MUIGrid from '../shared/MUIGrid';
import authImage from '../assets/auth-img.jpg';
import { authStyle } from './auth.style';
import MUIBox from '../shared/MUIBox';

const AuthLayout = () => {
  const classes = authStyle();
  return (
    <>
      <MUIGrid container>
        <MUIGrid display={{ md: 'block', xs: 'none' }} size={{ xs: 12, md: 6 }}>
          <MUIBox className={classes.authImage}>
            <img src={authImage} alt="authImage" />
          </MUIBox>
        </MUIGrid>
        <MUIGrid size={{ xs: 12, md: 6 }}>
          <Outlet />
        </MUIGrid>
      </MUIGrid>
    </>
  );
};

export default AuthLayout;
