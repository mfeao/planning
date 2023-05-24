import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Layout } from '~/layouts';
import { Archive, Experiments, Planning } from '~/pages';

const routes: RouteObject[] = [
  {
    path: 'planning',
    element: React.createElement(Layout),
    children: [
      {
        index: true,
        element: React.createElement(Planning),
      },
      {
        path: 'experiments',
        element: React.createElement(Experiments),
      },
      {
        path: 'archive',
        element: React.createElement(Archive),
      },
    ],
  },
];

export default routes;
