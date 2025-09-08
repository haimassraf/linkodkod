import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/application-layout/Header'
import Layout from './components/application-layout/Layout'
import PostPage from './components/application-layout/PostPage'

function App() {


  return (
    <>
      <Routes>
        <Route path='' element={<Header />}>
          <Route path='/posts/:id' element={<PostPage/>} />
          <Route path='/posts' element={<Layout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
