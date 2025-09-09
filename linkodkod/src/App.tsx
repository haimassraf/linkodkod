import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/application-layout/Layout'
import PostPage from './components/application-layout/PostPage'
import HomePage from './components/application-layout/HomePage'
import AddNewPost from './components/application-layout/AddNewPost'
import Login from './components/authPages/Login'
import Signup from './components/authPages/Signup'
import UpdatePost from './components/application-layout/UpdatePost'
import LandingPage from './components/authPages/LandingPage'
import Posts from './components/application-layout/Posts'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<LandingPage />} >
          <Route path='' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='layout' element={<Layout />}>
          <Route path='' element={<HomePage />} />
          <Route path='posts/:id' element={<PostPage />} />
          <Route path='posts' element={<Posts />} />
          <Route path='add-new-post' element={<AddNewPost />} />
          <Route path='update-post/:id' element={<UpdatePost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
