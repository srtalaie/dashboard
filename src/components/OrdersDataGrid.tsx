import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'

import { orders } from "../data/orders"

const columns: GridColDef<(typeof orders)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'prod', headerName: 'Product', width: 150, editable: false, },
  { field: 'cost', headerName: 'Cost ($)', width: 150, editable: false, },
  { field: 'company', headerName: 'Company', width: 150, editable: false, },
  { field: 'email', headerName: 'Email', width: 150, editable: false, },
  { field: 'date', headerName: 'Date', width: 150, editable: false, },
  { field: 'order_num', headerName: 'Order #', width: 150 },
]

const OrdersDataGrid = () => {
  return (
    <Box>
      <DataGrid
        columns={columns}
        rows={orders}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick />
    </Box>
  )
}

export default OrdersDataGrid