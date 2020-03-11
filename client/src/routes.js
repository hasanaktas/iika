import React from 'react';
import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { Main as MainLayout, Auth as AuthLayout } from 'layouts';

const routes = [
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
        path: '/tanimlar/kurum-islemleri',
        exact: true,
        component: lazy(() => import('views/KurumIslemleri')),
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
