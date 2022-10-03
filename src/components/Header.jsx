import { header } from '../data'
import logo from '../assets/images/logo.png'
import toggle from '../assets/images/toggle.png'
import '../styles/components/header.css'

import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const Header = () => {
  const { title, paragraph1, paragraph2 } = header

  const click = () => {
    document.querySelector('.cont-menu').classList.toggle('active')
    console.log('ok')
  }

  return (
    <header id='header' className='principalBanner'>
      <div className='container row'>
        <menu className='row' data-aos='fade-down'>
          <h1 className='logo'>
            <Link className='link-comic' to='/'><img className='img-fluid' src={logo} alt='AMALDIS' /></Link>
          </h1>
          <div className="cont-menu">
            <ul className='row main-menu'>
              <li><a href='#project'>Proyecto</a></li>
              <li><a href='#synopsis'>Sinopsis</a></li>
              <li><a href='#mythology'>Mitología</a></li>
              <li><a href='#workteam'>Nosotros</a></li>
              <li><Link className='link-comic' to='/Chapters'>Cómic</Link></li>
            </ul>
          </div>
        </menu>
        <div className="toggle" onClick={click}>
          <img src={toggle} alt="" />
        </div>
      </div>
      <section className='home'>
        <div className='home-content' data-aos='fade-right'>
          <p className='paragraph'>{paragraph1}</p>
          <h1>{title}</h1>
          <p className='paragraph'>{paragraph2}</p>
          <div className='see-more'>
            <Link className='link-comic' to='/Chapters'>Ver</Link>
          </div>
        </div>
      </section>
    </header>
  )
}
export default Header
