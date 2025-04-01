import { Grid2, Typography } from '@mui/material'
import * as React from 'react'

import GaugeIndicator from '../components/GaugeIndicator'

export default function Gauge() {
  return (
    <Grid2 container>
      <Typography>
        Welcome to the Toolpad gauge!
      </Typography>
      <GaugeIndicator />
    </Grid2>
  )
}
