import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Posts from 'components/Posts'
import CircularProgress from '@mui/material/CircularProgress'
import { servicePosts } from 'common/services/posts'
import _isEmpty from 'lodash/isEmpty'
interface PostsProps {
  id: number
  title: string
  author: string
}

function App () {
  const [data, setData] = useState<PostsProps[]>([])

  useEffect(() => {
    servicePosts.getAllPosts()
      .then(response => setData(response))
      .catch(error => console.error(error))
  }, [])

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
