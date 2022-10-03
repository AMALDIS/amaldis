import { workTeam } from '../data'
import sound from '../assets/sound/tan.mp3'
import '../styles/components/workTeam.css'
import avatar1 from '../assets/images/avatar1.png'
import avatar2 from '../assets/images/avatar2.png'
import avatar3 from '../assets/images/avatar3.png'
import avatar4 from '../assets/images/avatar4.png'
import arrowHide from '../assets/images/hideArrow.svg'
import '../styles/components/chapter1.css'

import { Howl } from 'howler'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const WorkTeam = () => {
  const { title, name1, work1, name2, work2, name3, work3, name4, work4 } = workTeam
  const soundButton = new Howl({
    src: sound,
    html5: true
  })
  return (
    <section className='workTeam' id='workteam'>
      <h1 className='title'>{title}</h1>
      <div className='container row-grid' data-aos='fade-up'>
        <article>
          <figure>
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='avatar sonido' onClick={() => soundButton.play()} src={avatar1} alt='Bryan' />
          </figure>
          <h3 className='name'>{name1}</h3>
          <strong>{work1}</strong>
        </article>
        <article>
          <figure>
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='avatar sonido2' onClick={() => soundButton.play()} src={avatar2} alt='Valentina' />
          </figure>
          <h3>{name2}</h3>
          <strong>{work2}</strong>
        </article>
        <article>
          <figure>
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='avatar' onClick={() => soundButton.play()} src={avatar3} alt='Santiago' />
          </figure>
          <h3>{name3}</h3>
          <strong>{work3}</strong>
        </article>
        <article>
          <figure>
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='avatar' onClick={() => soundButton.play()} src={avatar4} alt='Cindy Leidy' />
          </figure>
          <h3>{name4}</h3>
          <strong>{work4}</strong>
        </article>
      </div>
      <div className='button box bounce-1'>
        <button className='back-content'>
          <a href='#header' onClick={() => soundButton.play()}>
            <img className='arrow-principal' src={arrowHide} />
          </a>
        </button>
      </div>
    </section>
  )
}

export default WorkTeam
