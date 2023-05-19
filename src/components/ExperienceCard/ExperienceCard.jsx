// styles
import styles from './ExperienceCard.module.css'

const ExperienceCard = ({content}) => {
  const empty = !content.organization

  return (
    <div className={empty ? styles.empty : styles.content}>
      {
        !empty && 
        <>
          <h1>{content.organization}</h1>
          <p>Card goes here</p>
        </>
      }
    </div>
  )
}
 
export default ExperienceCard