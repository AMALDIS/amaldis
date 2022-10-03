import { mythology } from '../data'
import '../styles/components/mythology.css'
import sound from '../assets/sound/tan.mp3'
import mythologyPhoto from '../assets/images/audumbla.png'
import arrow from '../assets/images/arrow.svg'
import arrowHide from '../assets/images/hideArrow.svg'

import { Howl } from 'howler'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const Mythology = () => {
  const { title, subtitle1, paragraph1, subtitle2, paragraph2 } = mythology
  const soundButton = new Howl({
    src: sound,
    html5: true
  })
  const showGreek = () => {
    document.querySelector('.greek').style.display = 'block'
    document.querySelector('.show-content').style.display = 'none'
    document.querySelector('.hide-content').style.display = 'block'
    soundButton.play()
  }
  const hideGreek = () => {
    document.querySelector('.greek').style.display = 'none'
    document.querySelector('.show-content').style.display = 'block'
    document.querySelector('.hide-content').style.display = 'none'
    soundButton.play()
  }
  const hideNordic = () => {
    document.querySelector('.nordic').style.display = 'none'
    document.querySelector('.show-content-nordic').style.display = 'block'
    document.querySelector('.hide-content-nordic').style.display = 'none'
    soundButton.play()
  }
  const showNordic = () => {
    document.querySelector('.nordic').style.display = 'block'
    document.querySelector('.show-content-nordic').style.display = 'none'
    document.querySelector('.hide-content-nordic').style.display = 'block'
    soundButton.play()
  }
  return (
    <section className='mythology' id='mythology'>
      <div className='container row-grid'>
        <figure className='main-photo audumbla-photo'>
          <motion.img whileHover={{ y: -35 }} className='img-fluid' src={mythologyPhoto} />
        </figure>
        <article className='mythology-info' data-aos='fade-right'>
          <h1>{title}</h1>
          <h2>{subtitle1}</h2>
          <button className='show-content' onClick={showGreek} href='#'><img className='arrow' src={arrow} /></button>
          <button className='hide-content' onClick={hideGreek} href='#'><img className='arrow-hide' src={arrowHide} /></button>
          <div className='greek'>
            <p className='mythology-text'>{paragraph1}</p>
          </div>
          <h2>{subtitle2}</h2>
          <button className='show-content-nordic' onClick={showNordic} href='#'><img className='arrow' src={arrow} /></button>
          <button className='hide-content-nordic' onClick={hideNordic} href='#'><img className='arrow-hide' src={arrowHide} /></button>
          <div className='nordic'>
            <p className='mythology-text'>{paragraph2}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Mythology
