// npm modules
import { useState, useEffect } from 'react'

// assets
import BostonDay from '../../assets/BostonDay.png'
import BostonNight from '../../assets/BostonNight.png'

// styling
import styles from './Landing.module.css'

const Landing = ({daytime}) => {

  return (
    <section 
      className={styles.container} 
      style={{ backgroundImage: `url(${daytime ? BostonDay : BostonNight})` }}
    >
      <div className={daytime ? styles.downDay : styles.downNight}>
        <i className="fa-solid fa-angle-down fa-2xl"></i>
      </div>
    </section>
  )
}

export default Landing