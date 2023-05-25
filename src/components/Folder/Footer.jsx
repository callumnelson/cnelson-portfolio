// npm modules
import { Link } from "react-router-dom"

// css
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link to="https://github.com/callumnelson" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github fa-xl"></i>
      </Link>
      <Link to="mailto:callum.nelson95@gmail.com" target="_blank" rel="noreferrer">
        <i className="fa-solid fa-envelope fa-xl"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/callum-nelson/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin fa-xl"></i>
      </Link>
      <Link to="https://docs.google.com/document/d/1TnQtn5dfgpeaexHJMzqC55XDiOAJKQeYs6MKgJAkLdc/edit?usp=sharing" target="_blank" rel="noreferrer">
        <i className="fa-solid fa-file-lines fa-xl"></i>
      </Link>
    </div>
  )
}
 
export default Footer