import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/application-layout/Header'
import Layout from './components/application-layout/Layout'
import PostPage from './components/application-layout/PostPage'
import HomePage from './components/application-layout/HomePage'

function App() {


  return (
    <>
      <Routes>
        <Route path='' element={<Header />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts/:id' element={<PostPage />} />
          <Route path='/posts' element={<Layout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
