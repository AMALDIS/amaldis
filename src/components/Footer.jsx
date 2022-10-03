import { footer } from '../data'
import logoReflect from '../assets/images/logo-reflect.png'
import iconFacebook from '../assets/images/icon-facebook.svg'
import iconInstagram from '../assets/images/icon-instagram.svg'
import iconEnvelope from '../assets/images/icon-envelope.svg'
import '../styles/components/footer.css'

import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const Footer = () => {
  const { title, paragraph1, contact } = footer
  return (
    <footer>
      <section className='footer-content'>
        <section className='container-footer'>
          <div className='text-footer'>
            <h1>{title}</h1>
            <p className='paragraph'>{paragraph1}</p>
          </div>
        </section>
        <div className='contact'>
          <h1 className='logo'>
            <Link className='link-comic' to='/'><img className='img-fluid' src={logoReflect} alt='AMALDIS' /></Link>
          </h1>
          <div className='social-media'>
            <div className='row'>
              <a href='#'><img className='icon-social-media' src={iconFacebook} alt='Facebook' /></a>
              <a href='#' className='text-social-media'>{contact}</a>
            </div>
            <div className='row'>
              <a href='#'><img className='icon-social-media' src={iconInstagram} alt='Instagram' /></a>
              <a href='#' className='text-social-media'>{contact}</a>
            </div>
            <div className='row'>
              <a href='#'><img className='icon-social-media' src={iconEnvelope} alt='Mail' /></a>
              <a href='#' className='text-social-media'>{contact}</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
