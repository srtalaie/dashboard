import { Grid2, Typography } from '@mui/material'
import * as React from 'react'

import OrdersTable from '../components/OrdersTable'
import orders from "../data/orders.json"

export default function OrdersPage() {
  return (
    <Grid2 container>
      <Typography>
        Welcome to the Toolpad orders!
      </Typography>
      <OrdersTable data={orders} />
    </Grid2>
  )
}
