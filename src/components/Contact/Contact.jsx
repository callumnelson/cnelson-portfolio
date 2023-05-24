// npm modules
import { Link } from "react-router-dom"
import { useState } from "react"

// components
import SectionHeader from "../SectionHeader/SectionHeader"

// css
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      fullName: '',
      email: '',
      message: ''
    })
  }

  return (
    <section 
      className={styles.container}
    >
    <Link id='contact'></Link>
    <SectionHeader sectionName={'Contact'} />
    <form 
      className={styles.form}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <input 
        required
        name="fullName"
        type="text" 
        placeholder="Your Full Name"
        onChange={handleChange}
        value={formData.fullName}
        />
      <input 
        required
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={formData.email}
        />
      <textarea 
        required
        name="message" 
        cols="30" 
        rows="10" 
        placeholder="Type Your Message Here"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Send Message</button>
    </form>
  </section>
  )
}
 
export default Contact