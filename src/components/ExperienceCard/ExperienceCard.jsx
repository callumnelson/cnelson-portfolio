// styles
import styles from './ExperienceCard.module.css'

// components
import Icon from '../Icon/Icon'

const ExperienceCard = ({content}) => {
  const empty = !content.organization

  return (
    <div 
      className={empty ? styles.empty : styles.content}
    >
      {
        !empty && 
        <>
          <header>
            <h1>{content.organization}</h1>
            <Icon category={content.logo} />
          </header>
          <div className={styles.body}>
            <div>
              <p>{content.role}</p>
              <p>{content.start} - {content.end}</p>
            </div>
            <p>{content.description}</p>
          </div>
        </>
      }
    </div>
  )
}
 
export default ExperienceCard