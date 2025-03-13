import { Container, Grid2 } from '@mui/material'
import * as React from 'react'

import OrdersDataGrid from '../components/OrdersDataGrid'
import YearlySalesBarChart from '../components/YearlySalesBarChart'

export default function HomePage() {

  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 size={7}>
          <OrdersDataGrid />
        </Grid2>
        <Grid2 size={5}>
          <YearlySalesBarChart />
        </Grid2>
      </Grid2>
    </Container>
  )
}
