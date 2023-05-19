//assets
import applicant from '../../assets/images/applicant.png'
import battleOfTheBooks from '../../assets/images/battleOfTheBooks.png'
import othello from '../../assets/images/othello.png'

// styles
import styles from './Screenshot.module.css'

const Screenshot = ({ category }) => {
  const screenshots = {
    applicant,
    battleOfTheBooks,
    othello,
  }

  return (
    <img className={styles[category]} src={screenshots[category]} alt={`A screenshot of ${category}.`}/>
  )
}

export default Screenshot