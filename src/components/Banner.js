import background from '../assets/img/IMG.png'
import './styles/Banner.css'

function Banner() {
    return <div className="banner">
                <img src={background} alt='background banner' className='bgBanner' />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
}

export default Banner
