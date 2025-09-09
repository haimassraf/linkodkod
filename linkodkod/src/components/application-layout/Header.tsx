import '../../style/header.css'
import { FaInstagram } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router"
import makeRequest from '../../utils/makeRequest';

const Header = () => {
  const navigate = useNavigate();
  async function logout() {
    const res = await makeRequest('/auth/logout', 'GET', null, true);
    alert(res)
    navigate('/')
  }

  return (
    <>
      <header>
        <i className="logo">
          <img src="src/assets/logo.jpeg" alt="" />
        </i>
        <p className="slogan">The First Kosher Instegram! <span><FaInstagram /></span></p>
        <section className='buttons'>
          <Link className='btn' to={'posts'}>All posts</Link>
          <Link className='btn' to={'add-new-post'}>Add New Post</Link>
          <button className='logout' onClick={logout}>Logout</button>
        </section >
      </header>

      <Outlet />
    </>
  )
}

export default Header