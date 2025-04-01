import BarChartIcon from '@mui/icons-material/BarChart'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PieChartIcon from '@mui/icons-material/PieChart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SpeedIcon from '@mui/icons-material/Speed'
import type { Navigation } from '@toolpad/core/AppProvider'
import { ReactRouterAppProvider } from '@toolpad/core/react-router'
import * as React from 'react'
import { Outlet } from 'react-router'

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'quarterly',
    title: 'Quarterly Earnings',
    icon: <BarChartIcon />,
  },
  {
    segment: 'budget',
    title: 'Budget Breakdown',
    icon: <PieChartIcon />,
  },
  {
    segment: 'gauge',
    title: 'Gauge',
    icon: <SpeedIcon />,
  },
]

const BRANDING = {
  title: "dashboard",
}


export default function App() {

  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  )
}