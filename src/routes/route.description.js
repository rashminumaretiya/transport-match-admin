import React from 'react';
import SignIn from '../components/auth/signin/SignIn';
import PublicRoute from '../components/routeLayout/PublicRoute';
import AuthLayout from '../layout/AuthLayout';
import SignUp from '../components/auth/signup/SignUp';
import ForgotPassword from '../components/auth/forgotPassword/ForgotPassword';

export const publicRoute = [
  {
    element: <PublicRoute />,
    path: '/',
    children: [
      {
        element: <AuthLayout />,
        path: '/',
        children: [
          {
            path: '/signin',
            element: <SignIn />,
          },
          {
            path: '/signup',
            element: <SignUp />,
          },
          {
            path: '/forgot-password',
            element: <ForgotPassword />,
          },
        ],
      },
    ],
  },
];

// const privateRoute = [
//   {
//     element: <ProtectedRoute />,
//     children: [
//       {
//         element: <Layout />,
//         path: '/',
//         children: [
//           {
//             path: '/dashboard',
//             element: <Dashboard />,
//           },
//         ],
//       },
//       {
//         path: '/schedule',
//         element: <Schedule />,
//       },
//     ],
//   },
// ];

const routes = [...publicRoute];

export default routes;
