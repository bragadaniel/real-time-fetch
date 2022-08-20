import React from 'react'
import DataGrid from 'components/DataGrid'
import { DataProps } from './types'
import { columns } from './help/columns'

const Posts = ({ data, loading }: DataProps) => {
  return <DataGrid
  rows={data}
  columns={columns}
  loading={loading}
  />
}
export default Posts
