import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import _map from 'lodash/map'

interface PostsProps {
  id: number
  title: string
  author: string
}

interface DataProps {
  data: PostsProps[]
}

const Posts = ({ data }: DataProps) => {
  return <List>
    {_map(data, item => <ListItem key={item.id}>{item.title}</ListItem>)}
  </List>
}
export default Posts
