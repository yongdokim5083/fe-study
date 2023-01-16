
import React from 'react';
import GlobalLayout from './pages/_layout'

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicTempIndex = React.lazy(() => import('./pages/temp/index'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/temp', element: <DynamicTempIndex />, index: true},
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/temp' },
]
