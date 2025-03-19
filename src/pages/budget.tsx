import { Box, Divider, Grid2, Stack, Typography } from '@mui/material'
import * as React from 'react'
import BudgetPieChart from '../components/BudgetPieChart'

import { departments } from '../data/departments'

export default function Budget() {
  return (
    <Grid2 container direction={'column'} spacing={2}>
      <Grid2>
        <Typography>
          Welcome to the Toolpad budget breakdown!
        </Typography>
      </Grid2>
      <Grid2>
        <BudgetPieChart />
      </Grid2>
      <Grid2>
        <Typography gutterBottom variant='h4'>
          Company Yearly Expenses Breakdown by Department
        </Typography>
        {departments.map((department) => (
          <Box>
            <Divider />
            <Stack
              direction="column"
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
              key={department.id}
            >
              <Typography gutterBottom variant='h5' component='div'>{department.name}</Typography>
              <Stack
                direction='column'
                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
              >
                {department.budgetBreakdown.map((item) => (
                  <Typography key={item.name} variant='body2'>{item.name}: ${item.amount}</Typography>
                ))}
              </Stack>
              <Typography variant='h6'>Total: ${department.total}</Typography>
            </Stack>
            <Divider />
          </Box>
        ))}
      </Grid2>
    </Grid2>
  )
}
