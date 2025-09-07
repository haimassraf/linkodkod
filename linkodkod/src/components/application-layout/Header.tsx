import '../../style/header.css'
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <i className="logo">
        <img src="src/assets/logo.jpeg" alt="" />
      </i>
      <p className="slogan">The First Kosher Instegram! <span><FaInstagram /></span></p>
    </header>
  )
}

export default Header