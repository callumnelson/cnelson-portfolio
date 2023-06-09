//assets
import applicant from '../../assets/images/applicant.png'
import battleofthebooks from '../../assets/images/battleofthebooks.png'
import othello from '../../assets/images/othello.png'
import portfolio from '../../assets/images/portfolio.png'
import savvier from '../../assets/images/savvier.png'

// styles
import styles from './Screenshot.module.css'

const Screenshot = ({ category }) => {
  const screenshots = {
    applicant,
    battleofthebooks,
    othello,
    portfolio,
    savvier
  }

  return <img className={styles[category]} src={screenshots[category]} alt={`A screenshot of ${category}.`} />
}

export default Screenshot
