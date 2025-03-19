import { Grid2, Typography } from '@mui/material'
import * as React from 'react'
import BudgetPieChart from '../components/BudgetPieChart'

export default function Budget() {
  return (
    <Grid2 container direction={'column'}>
      <Grid2>
        <Typography>
          Welcome to the Toolpad budget breakdown!
        </Typography>
      </Grid2>
      <Grid2>
        <BudgetPieChart />
      </Grid2>
    </Grid2>
  )
}
