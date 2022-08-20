import React from 'react'
import _isEmpty from 'lodash/isEmpty'
import Box from '@mui/material/Box'
import Posts from 'components/Posts'
import CircularProgress from '@mui/material/CircularProgress'
import { servicePosts } from 'common/services/posts'

// interface PostsProps {
//   id: number
//   title: string
//   author: string
// }

function App () {
  const { data } = servicePosts.getAllPosts()

  return (
    <Box>
      {
        _isEmpty(data)
          ? <CircularProgress/>
          : <Posts data={data}/>
      }
    </Box>
  )
}

export default App
