// assets
import headshot from '../../assets/images/headshot.png'

// css
import styles from './NameCard.module.css'

const NameCard = () => {
  return (
    <div className={styles.container}>
      <img src={ headshot } alt="Callum Nelson Headshot" />
      <h1>Callum</h1>
      <h1>Nelson</h1>
    </div>
  )
}
 
export default NameCard