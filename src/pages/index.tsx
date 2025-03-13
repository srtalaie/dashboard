import { Container, Grid2 } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import OrdersDataGrid from '../components/OrdersDataGrid'

export default function HomePage() {

  return (
    <Container>
      <Grid2>
        <Typography>
          Orders
        </Typography>
        <OrdersDataGrid />
      </Grid2>
    </Container>
  )
}
