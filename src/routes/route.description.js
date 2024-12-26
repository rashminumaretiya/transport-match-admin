import React from 'react';
import SignIn from '../components/auth/signin/SignIn';
import PublicRoute from '../components/routeLayout/PublicRoute';
import AuthLayout from '../layout/AuthLayout';

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
