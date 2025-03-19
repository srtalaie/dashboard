import { Grid2, Typography } from '@mui/material'
import * as React from 'react'

import YearlySalesBarChart from '../components/YearlySalesBarChart'

export default function Quarterly() {
  return (
    <Grid2 container direction={'column'}>
      <Grid2>
        <Typography>
          Welcome to the Toolpad quarterly breakdown!
        </Typography>
      </Grid2>
      <Grid2>
        <YearlySalesBarChart />
      </Grid2>
    </Grid2>
  )
}
