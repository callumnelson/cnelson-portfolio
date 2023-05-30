// css
import styles from './SectionHeader.module.css'

const SectionHeader = ({ sectionName }) => {
  return (
    <>
      <div className={styles.header}>
        <h1>{sectionName}</h1>
      </div>
      <div className={styles.divider}></div>
    </>
  )
}

export default SectionHeader
