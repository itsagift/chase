import cartoon from '../images/cartoon.jpeg'
import icon from '../images/test.png'
import { StaticImage } from "gatsby-plugin-image"

function Hero(){
return(
  <section className="hero-section">
    <div className='hero-image'>
      <StaticImage
        src="../images/test.png"
        alt="my face"
        placeholder="none"
        layout="fixed"
        width={300}
        height={300}
        imgStyle={{"borderRadius": "50%"}}
        quality="100"
      />
    </div>
    <div className="hero-text">
      <div className='hero-line'>Designer & developer based in NYC.</div>
    </div>
  </section>
)
}

export default Hero