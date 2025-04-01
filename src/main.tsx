import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import Layout from './layouts/dashboard'
import DashboardPage from './pages'
import Budget from './pages/budget'
import Gauge from './pages/gauge'
import OrdersPage from './pages/orders'
import Quarterly from './pages/quarterly'


const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'orders',
            Component: OrdersPage,
          },
          {
            path: 'quarterly',
            Component: Quarterly,
          },
          {
            path: 'budget',
            Component: Budget,
          },
          {
            path: 'gauge',
            Component: Gauge,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)