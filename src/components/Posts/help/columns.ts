import { GridColDef } from '@mui/x-data-grid'

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
  },
  {
    field: 'userId',
    headerName: 'User ID',
  },
  {
    field: 'title',
    headerName: 'Title',
  },
  {
    field: 'body',
    headerName: 'Body',
  },
]
