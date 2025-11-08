import { createBrowserRouter } from 'react-router'

import { ErrorPage } from '@/components/error-page/ErrorPage'
import { MainLayout } from '@/components/layouts/MainLayout'
import { ROUTER_CONFIG } from '@/router/config'
import { Home } from '@/pages/home/components/Home'
import { MyRecord } from '@/pages/my-record/components/MyRecord'
import { Column } from '@/pages/column/components/Column'

export const router = createBrowserRouter([
  {
    path: ROUTER_CONFIG.ROOT,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTER_CONFIG.HOME,
        errorElement: <ErrorPage />,
        element: <Home />,
      },
      {
        path: ROUTER_CONFIG.MY_RECORD,
        errorElement: <ErrorPage />,
        element: <MyRecord />,
      },
      {
        path: ROUTER_CONFIG.MY_RECORD,
        errorElement: <ErrorPage />,
        element: <Column />,
      },
    ],
  },
])
