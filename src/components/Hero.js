import cartoon from '../images/cartoon.jpeg'
import icon from '../images/test.png'

function Hero(){
return(
  <section className="hero-section">
    <div className='hero-image'>
      <img className='hero-img'src={icon}/>
    </div>
    <div className="hero-text">
      <div className='hero-line'>Frontend developer based in NYC.</div>
    </div>
  </section>
)
}

export default Hero