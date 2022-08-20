import React from 'react'
import DataGrid from 'components/DataGrid'
import { DataProps } from './types'
import { columns } from './help/columns'

const Posts = ({ data }: DataProps) => {
  return <DataGrid
  rows={data}
  columns={columns}
  />
}
export default Posts
