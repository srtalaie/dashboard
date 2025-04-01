import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge'
import React from 'react'

let randVal = Math.floor(Math.random() * (100 - 0 + 1)) + 0
let randGreen = Math.floor(Math.random() * (250 - 0 + 1)) + 0
let randRed = Math.floor(Math.random() * (250 - 0 + 1)) + 0
let randBlue = Math.floor(Math.random() * (250 - 0 + 1)) + 0

const settings = {
  width: 200,
  height: 200,
  value: randVal,
}

export default function GaugeIndicator() {
  return (
    <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: `rgb(${randRed}, ${randGreen}, ${randBlue})`,
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />
  )
}