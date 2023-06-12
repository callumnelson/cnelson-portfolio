// styles
import styles from './ExperienceCard.module.css'

// components
import Icon from '../Icon/Icon'

const ExperienceCard = ({ content, showInfo, setShowInfo }) => {
  const empty = !content.organization

  return (
    <div className={empty ? styles.empty : styles.content}>
      {!empty && (
        <>
          <header className={styles.header}>
            <h1>{content.organization}</h1>
            <Icon category={content.logo} />
          </header>
          <div className={styles.body}>
            <div>
              <p>{content.role}</p>
              <p>
                {content.start} - {content.end}
              </p>
            </div>
          </div>
          <p
            onClick={() => setShowInfo(showInfo === content.id ? 0 : content.id)}
          >
            {showInfo === content.id ? "Hide": "Show More"}
          </p>
          <p 
            className={showInfo === content.id ? styles.descriptionShow : styles.descriptionHide}
          >
            {content.description}
          </p>
        </>
      )}
    </div>
  )
}

export default ExperienceCard
