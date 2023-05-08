// components
import { Link } from "react-router-dom"

// styling
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="icon-container">
        <Link to="https://github.com/callumnelson" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github fa-2xl"></i>
        </Link>
        <Link to="mailto:callum.nelson95@gmail.com" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-envelope fa-2xl"></i>
        </Link>
        <Link to="https://www.linkedin.com/callum-nelson" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </Link>
      </div>
    </footer>
  )
}
 
export default Footer;