import React from 'react'
import { StyledBox } from './styles'
import LinearProgress from '@mui/material/LinearProgress'
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid'

const DataGrid = ({ ...props }: any) => {
  return (
    <StyledBox>
      <MuiDataGrid
        components={{
          LoadingOverlay: LinearProgress,
        }}
        {...props}
      />
    </StyledBox>
  )
}
export default DataGrid
