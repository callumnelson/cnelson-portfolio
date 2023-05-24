//assets
import ers from '../../assets/icons/ers.png'
import ga from '../../assets/icons/ga.png'
import kipp from '../../assets/icons/kipp.png'
import brooke from '../../assets/icons/brooke.png'
import brown from '../../assets/icons/brown.png'
import css from '../../assets/icons/css.png'
import html from '../../assets/icons/html.png'
import javascript from '../../assets/icons/javascript.png'
import mongodb from '../../assets/icons/mongodb.png'
import git from '../../assets/icons/git.png'
import react from '../../assets/icons/react.png'
import node from '../../assets/icons/node.png'
import express from '../../assets/icons/express.png'
import ejs from '../../assets/icons/ejs.png'
import mui from '../../assets/icons/mui.png'
import vite from '../../assets/icons/vite.png'

// styles
import styles from './Icon.module.css'

const Icon = ({ category }) => {
  const icons = {
    GA: ga,
    ERS: ers,
    KIPP: kipp,
    BROOKE: brooke,
    BROWN: brown,
    CSS: css,
    HTML: html,
    JAVASCRIPT: javascript,
    MONGODB: mongodb,
    GIT: git,
    REACT: react,
    NODE: node,
    EXPRESS: express,
    EJS: ejs,
    MUI: mui,
    VITE: vite
  }

  return (
    <img className={styles[category]} src={icons[category]} alt={`A ${category} icon.`}/>
  )
}

export default Icon