import logo from '../assets/img/LOGONB.png'
import './styles/Footer.css'

function Footer() {
    return <div className="footer">
                <img src={logo} alt='Logo noir et blanc' className='logo' />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
}

export default Footer
