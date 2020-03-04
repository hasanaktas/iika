import { lazy } from 'react';
import { Main as MainLayout } from 'layouts';
const routes = [
  {
    route: '/',
    component: MainLayout,
    routes: [
      {
        path: '/puantaj',
        exact: true,
        component: lazy(() => import('views/Puantaj'))
      }
    ]
  }
];

export default routes;
