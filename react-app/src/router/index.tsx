import { createBrowserRouter } from 'react-router'
import { MainLayout } from '@/components/layouts/MainLayout'
import { ROUTER_CONFIG } from '@/router/config'
import { Home } from '@/pages/home/components/Home'
import { MyRecord } from '@/pages/my-record/components/MyRecord'
import { Column } from '@/pages/column/components/Column'

export const router = createBrowserRouter([
  {
    path: ROUTER_CONFIG.ROOT,
    element: <MainLayout />,
    children: [
      {
        path: ROUTER_CONFIG.HOME,
        element: <Home />,
      },
      {
        path: ROUTER_CONFIG.MY_RECORD,
        element: <MyRecord />,
      },
      {
        path: ROUTER_CONFIG.COLUMN,
        element: <Column />,
      },
    ],
  },
])
