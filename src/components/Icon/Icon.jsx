//assets
import ers from '../../assets/icons/ers.png'
import ga from '../../assets/icons/ga.png'
import kipp from '../../assets/icons/kipp.png'
import brooke from '../../assets/icons/brooke.png'
import brown from '../../assets/icons/brown.png'

// styles
import styles from './Icon.module.css'

const Icon = ({ category }) => {
  const icons = {
    GA: ga,
    ERS: ers,
    KIPP: kipp,
    BROOKE: brooke,
    BROWN: brown,
  }

  return (
    <img className={styles[category]} src={icons[category]} alt={`A ${category} icon.`}/>
  )
}

export default Icon