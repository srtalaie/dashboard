import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import React from "react"

const OrdersTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Cost&nbsp;($)</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.guid}>
              <TableCell>{row.guid}</TableCell>
              <TableCell>{row.prod}</TableCell>
              <TableCell>{row.cost}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrdersTable