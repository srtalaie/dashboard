import { Grid2, Typography } from '@mui/material'
import * as React from 'react'

import OrdersDataGrid from '../components/OrdersDataGrid'

export default function OrdersPage() {
  return (
    <Grid2 container>
      <Typography>
        Welcome to the Toolpad orders!
      </Typography>
      <OrdersDataGrid />
    </Grid2>
  )
}
