import { header } from '../data'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Header = () => {
  const { title, paragraph1, paragraph2 } = header
  return (
    <header className='bannerComic'>
      <div className='container row'>
        <h1 className='logo'>
          <Link className='link-comic' to='/'><img className='img-fluid' src={logo} alt='AMALDIS' /></Link>
        </h1>
      </div>
      <section className='home'>
        <div className='home-content'>
          <p className='paragraph'>{paragraph1}</p>
          <h1>{title}</h1>
          <p className='paragraph'>{paragraph2}</p>
          <div className='see-more'>
            <Link className='link-comic' to='/'>Regresar</Link>
          </div>
        </div>
      </section>
    </header>
  )
}
export default Header
