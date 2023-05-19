// npm modules
import { useState, useEffect } from 'react'

// assets
import BostonDay from '../../assets/BostonDay.png'
import BostonNight from '../../assets/BostonNight.png'

// services
import { getMinutes } from "../../modules/functions"

// styling
import styles from './Landing.module.css'

const Landing = () => {
  const [daytime, setDaytime] = useState(true)
  const [date, setDate] = useState(new Date())
  
  const time = date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric'
  })

  const currentTime = getMinutes(time)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 60000)
    if (currentTime > 420 && currentTime < 1020) {
      setDaytime(true)
    } else {
      setDaytime(false)
    }
    return () => clearInterval(intervalId)
  }, [currentTime, setDaytime])

  return (
    <section 
      className={styles.container} 
      style={{ backgroundImage: `url(${daytime ? BostonDay : BostonNight})` }}
    >
      <div className={styles.headerWrapper}>
        <h1 className={styles.header}>Hi, I'm Callum Nelson</h1>
        <h2 className={styles.subheader}>I'm a full-stack engineer living in London, raised in Boston</h2>
      </div>
      <div className={daytime ? styles.downDay : styles.downNight}>
        <i className="fa-solid fa-angle-down fa-2xl"></i>
      </div>
    </section>
  )
}

export default Landing