import { Box } from '@mui/material'
import { BarChart } from '@mui/x-charts'
import React from 'react'

const chartSetting = { yAxis: [{ label: 'units sold' }] }

const dataset = [
  {
    year: '2021',
    q1: 159,
    q2: 180,
    q3: 76,
    q4: 237,
  },
  {
    year: '2022',
    q1: 290,
    q2: 231,
    q3: 373,
    q4: 204,
  },
  {
    year: '2023',
    q1: 333,
    q2: 408,
    q3: 398,
    q4: 512,
  },
  {
    year: '2024',
    q1: 373,
    q2: 245,
    q3: 462,
    q4: 301,
  },
]

const YearlySalesBarChart = () => {
  return (
    <Box>
      <BarChart
        dataset={dataset}
        series={[
          { dataKey: 'q1', label: 'Q1' },
          { dataKey: 'q2', label: 'Q2' },
          { dataKey: 'q3', label: 'Q3' },
          { dataKey: 'q4', label: 'Q4' },
        ]}
        xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
        {...chartSetting}
      />
    </Box>
  )
}

export default YearlySalesBarChart