import '../../style/header.css'
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router"
import makeRequest from '../../utils/makeRequest';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [name, setName] = useState<string>("")

  useEffect(() => {
    const userName = localStorage.getItem("userName")
    if (userName) {
      setName(userName)
    }
  }, [])
  const navigate = useNavigate();
  async function logout() {
    await makeRequest('/auth/logout', 'GET', null);
    localStorage.removeItem("userName")
    navigate('/')
  }

  return (
    <>
      <section className='icons'>
        <span className='userName'>
          <i><FaRegUserCircle /></i>
          {name}</span>
        <i className="logo">
          <img src="src/assets/logo.jpeg" alt="" />
        </i>
      </section>
      <p className="slogan">The First Kosher Instagram! <span><FaInstagram /></span></p>
      <section className='buttons'>
        <Link className='btn' to={'posts'}>All posts</Link>
        <Link className='btn' to={'add-new-post'}>Add New Post</Link>
        <button className='logout' onClick={logout}>Logout</button>
      </section >
    </>
  )
}

export default Header