
import React from 'react';
import GlobalLayout from './pages/_layout'

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicStudy2Index = React.lazy(() => import('./pages/study2/index'));
const DynamicStudy3Index = React.lazy(() => import('./pages/study3/index'));
const DynamicStudy4Index = React.lazy(() => import('./pages/study4/index'));
const DynamicTempIndex = React.lazy(() => import('./pages/temp/index'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/study2', element: <DynamicStudy2Index />, index: true},
      { path: '/study3', element: <DynamicStudy3Index />, index: true},
      { path: '/study4', element: <DynamicStudy4Index />, index: true},
      { path: '/temp', element: <DynamicTempIndex />, index: true},
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/study2' },
  { route: '/study3' },
  { route: '/study4' },
  { route: '/temp' },
]
