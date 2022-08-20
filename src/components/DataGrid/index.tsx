import React from 'react'
import { StyledBox } from './styles'
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid'

const DataGrid = ({ ...props }: any) => {
  return (<StyledBox>
    <MuiDataGrid {...props}/>
  </StyledBox>
  )
}
export default DataGrid
