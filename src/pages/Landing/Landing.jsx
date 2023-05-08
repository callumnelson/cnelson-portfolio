//Assets
import BostonDay from '../../assets/BostonDay.png'
import BostonNight from '../../assets/BostonNight.png'

// styling
import './Landing.css'

const Landing = ({daytime}) => {

  return (
    <div 
      className="page-container landing" 
      style={{ backgroundImage: `url(${daytime ? BostonDay : BostonNight})` }}
    >
      <h1 className='landing-header'>Hi, I'm Callum Nelson</h1>
      <h2 className='landing-header'>I'm a full-stack engineer living in London, raised in Boston</h2>
    </div>
  )
}

export default Landing