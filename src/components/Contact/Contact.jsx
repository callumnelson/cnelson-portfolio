// npm modules
import { Link } from "react-router-dom"
import { useState } from "react"

// components
import SectionHeader from "../SectionHeader/SectionHeader"

// services
import * as emailService from '../../services/emailService'

// css
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await emailService.sendEmail(formData)
      if(response.ok) setFormData({
          user_name: '',
          user_email: '',
          message: ''
        })
      else throw new Error('Oops, something went wrong')
    } catch (err) {
      console.log(err)
    }
    
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
        name="user_name"
        type="text" 
        placeholder="Your Full Name"
        onChange={handleChange}
        value={formData.user_name}
        />
      <input 
        required
        name="user_email"
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={formData.user_email}
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