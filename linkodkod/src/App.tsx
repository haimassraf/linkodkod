import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/application-layout/Header'
import Layout from './components/application-layout/Layout'
import PostPage from './components/application-layout/PostPage'
import HomePage from './components/application-layout/HomePage'
import AddNewPost from './components/application-layout/AddNewPost'
import Login from './components/authPages/login'
import Signup from './components/authPages/signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/index' element={<Header />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts/:id' element={<PostPage />} />
          <Route path='/posts' element={<Layout />} />
          <Route path='/add-new-post' element={<AddNewPost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
