import React from 'react';
import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { Main as MainLayout, Auth as AuthLayout } from 'layouts';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/auth/login" />,
  },

  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login')),
      },

      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },

  {
    route: '*',
    component: MainLayout,
    routes: [
      {
        path: '/anasayfa',
        exact: true,
        component: lazy(() => import('views/Home')),
      },
      {
        path: '/puantaj',
        exact: true,
        component: lazy(() => import('views/Puantaj')),
      },
      {
        path: '/personelkarti/kisikarti',
        exact: true,
        component: lazy(() => import('views/PersonelKarti/KisiKarti')),
      },
      {
        path: '/kisi/',
        exact: true,
        component: lazy(() => import('views/Kisi')),
      },
      {
        path: '/kisi/:id',
        exact: true,
        component: lazy(() => import('views/Kisi')),
      },
      {
        path: '/kisi/:id/:tab',
        exact: true,
        component: lazy(() => import('views/Kisi')),
      },
    ],
  },
];

export default routes;
