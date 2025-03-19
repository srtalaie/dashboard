import { Box } from '@mui/material'
import { DefaultizedPieValueType } from '@mui/x-charts/models'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'
import React from 'react'

const data = [
  { label: 'Human Resources (HR)', value: 580000, color: '#9FE2BF' },
  { label: 'Finances & Accounting', value: 490000, color: '#DE3163' },
  { label: 'Marketing & Advertising', value: 920000, color: '#FF7F50' },
  { label: 'Research & Development (R&D)', value: 1300000, color: '#FFBF00' },
  { label: 'IT & Infrastructure', value: 1550000, color: '#DFFF00' },
  { label: 'Customer Support', value: 570000, color: '#40E0D0' },
  { label: 'Legal & Compliance', value: 680000, color: '#6495ED' },
  { label: 'General & Administrative (G&A)', value: 520000, color: '#CCCCFF' },
]

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
}
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0)

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL
  return `${(percent * 100).toFixed(0)}%`
}

const BudgetPieChart = () => {
  return (
    <Box>
      <PieChart
        series={[
          {
            outerRadius: 100,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'black',
            fontSize: 13,
          },
        }}
        {...sizing}
      />
    </Box>
  )
}

export default BudgetPieChart