import React from 'react'
import _get from 'lodash/get'
import Box from '@mui/material/Box'
import Posts from 'components/Posts'
import { servicePosts } from 'common/services/posts'

function App () {
  const response = servicePosts.getAllPosts()

  return (
    <Box>
      <Posts
      data={_get(response, 'data', [])}
      loading={!response.data}
      />
    </Box>
  )
}

export default App
