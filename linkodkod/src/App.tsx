import { useEffect, useState } from 'react'
import './App.css'
import Post from './components/Post'
import type { PostType } from './Types/PostType'
import postsDB from './db/postsDB'

function App() {

  const [allPosts, setAllPosts] = useState<PostType[]>([])
  useEffect(() => {
    setAllPosts(postsDB)
  }, [])

  return (
    <div className='posts'>
      {allPosts.map((post, i) => (<Post post={post} key={i} />))}
    </div>
  )
}

export default App
