import '../../style/header.css'
import { FaInstagram } from "react-icons/fa";
import { Link, Outlet } from "react-router"

const Header = () => {
  return (
    <>
      <header>
        <i className="logo">
          <img src="src/assets/logo.jpeg" alt="" />
        </i>
        <p className="slogan">The First Kosher Instegram! <span><FaInstagram /></span></p>
        <Link className='btn' to={'posts'}>All posts</Link>
        <Link className='btn' to={'add-new-post'}>Add New Post</Link>
      </header>
      <Outlet />
    </>
  )
}

export default Header