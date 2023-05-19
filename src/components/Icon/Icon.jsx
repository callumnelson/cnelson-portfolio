//assets
import ers from '../../assets/icons/ers.png'
import ga from '../../assets/icons/ga.png'


const Icon = ({ category }) => {
  const icons = {
    GA: ga,
    ERS: ers,
    // KIPP: kipp,
    // BROOKE: brooke,
    // BROWN: brown,
  }

  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`}/>
  )
}

export default Icon