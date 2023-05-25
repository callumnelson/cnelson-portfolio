// npm modules
import { Link } from "react-router-dom"
import { useState } from "react"

// components
import SectionHeader from "../SectionHeader/SectionHeader"
import Spinner from "../Spinner/Spinner"

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
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    status: false,
    text: `Thanks for reaching out. I'll be in touch!`
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({...message, status: true})
    try {
      const response = await emailService.sendEmail(formData)
      if (!response){
        setMessage({status: false, text: `Hmmm something went wrong. Please try again!`})
        setLoading(false)
        throw new Error('Oops, something went wrong')
      }
      else if(response.ok) {
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        })
        setMessage({...message, status: false})
        setLoading(false)
      }
      else {
        setLoading(false)
        setMessage({status: false, text: `Hmmm something went wrong. Please try again!`})
        throw new Error('Oops, something went wrong')
      }
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
    <div className={message.status ? styles.message : styles.hideMessage}>
      <p>{message.text}</p>
    </div>
    <form 
      className={loading ? styles.formLoading : ''}
      autoComplete="off"
      onSubmit={onSubmit}
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
      <button 
        type="submit"
        disabled={loading}
      >
        {!loading ? 'Send Message' 
          : 
          <Spinner />
        }
      </button>
    </form>
  </section>
  )
}
 
export default Contact