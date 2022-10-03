import { project } from '../data'
import '../styles/components/project.css'
import mainPhoto from '../assets/images/brothers.png'
import video from '../assets/video/amaldis.mp4'
import poster from '../assets/video/plantilla.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const Project = () => {
  const { title, paragraph1 } = project
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation]}
      navigation
      className='carousel'
    >
      <SwiperSlide>
        <section className='project' id='project'>
          <div className='container row-grid'>
            <figure className='main-photo'>
              <motion.img whileTap={{ x: 10 }} className='img-fluid' src={mainPhoto} alt='brothers' />
            </figure>
            <article className='title' data-aos='fade-left'>
              <h1>{title}</h1>
              <p className='info-text'>{paragraph1}</p>
            </article>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <video className='poster' width='100%' height='100%' controls poster={poster}>
          <source src={video} type='video/mp4' />
        </video>
      </SwiperSlide>
    </Swiper>
  )
}

export default Project
