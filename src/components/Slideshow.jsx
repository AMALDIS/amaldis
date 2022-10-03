import imgs from '../data/imgs'
import { slider } from '../data'
import '../styles/components/sliderswiper.css'
import '../styles/components/slideshow.css'
import bgSlider from '../assets/images/slider/bg-slider.png'
import odinWicked from '../assets/images/slider/odin-thumbnail-wicked.png'
import odinConfused from '../assets/images/slider/odin-thumbnail-confused.png'
import odinSurprised from '../assets/images/slider/odin-thumbnail-surprised.png'

import audumblaStars from '../assets/images/slider/audumbla-thumbnail1.png'
import audumblaScared from '../assets/images/slider/audumbla-thumbnail2.png'
import audumblaHearts from '../assets/images/slider/audumbla-thumbnail3.png'

import veSurprised from '../assets/images/slider/ve-thumbnail-surprised.png'
import veConfused from '../assets/images/slider/ve-thumbnail-confused.png'
import veFlirtatious from '../assets/images/slider/ve-thumbnail-flirtatious.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
const Slideshow = () => {
  const { subtitle1, subtitle2, subtitle3, paragraph1, paragraph2, paragraph3 } = slider
  const odin = () => {
    document.querySelector('.odin').src = imgs[6]
  }
  const odin1 = () => {
    document.querySelector('.odin').src = imgs[7]
  }
  const odin2 = () => {
    document.querySelector('.odin').src = imgs[8]
  }
  const odin3 = () => {
    document.querySelector('.odin').src = imgs[9]
  }

  const audumbla = () => {
    document.querySelector('.audumbla-image').src = imgs[10]
  }
  const audumbla1 = () => {
    document.querySelector('.audumbla-image').src = imgs[11]
  }
  const audumbla2 = () => {
    document.querySelector('.audumbla-image').src = imgs[12]
  }
  const audumbla3 = () => {
    document.querySelector('.audumbla-image').src = imgs[13]
  }

  const ve = () => {
    document.querySelector('.ve-photo ').src = imgs[14]
  }
  const ve1 = () => {
    document.querySelector('.ve-photo ').src = imgs[15]
  }
  const ve2 = () => {
    document.querySelector('.ve-photo ').src = imgs[16]
  }
  const ve3 = () => {
    document.querySelector('.ve-photo ').src = imgs[17]
  }
  return (
    <section id='synopsis'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        loop
        loopedSlides={1}
        data-aos='fade-up'
        className='infomythology'
      >
        <SwiperSlide>
          <img className='absoluteContent' src={bgSlider} />
          <div className='content-slider'>
            <div className='info-slider'>
              <h1 className='title'>{subtitle1}</h1>
              <p className='text-slider'>{paragraph1}</p>
              <div className='thumbnails'>
                <div className='character-thumbnail' data-aos='flip-left'><img className='avatar-thumbnail' onClick={odin1} src={odinWicked} /></div>
                <div className='character-thumbnail' data-aos='flip-left'><img className='avatar-thumbnail' onClick={odin2} src={odinConfused} /></div>
                <div className='character-thumbnail' data-aos='flip-left'><img className='avatar-thumbnail' onClick={odin3} src={odinSurprised} /></div>
              </div>
            </div>
            <div><img className='odin avatar-slide' onClick={odin} src={imgs[6]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='absoluteContent' src={bgSlider} />
          <div className='content-slider'>
            <div className='info-slider'>
              <h1 className='title'>{subtitle2}</h1>
              <p className='text-slider'>{paragraph2}</p>
              <div className='thumbnails'>
                <div className='character-thumbnail'><img className='avatar-thumbnail' onClick={audumbla1} src={audumblaStars} /></div>
                <div className='character-thumbnail'><img className='avatar-thumbnail' onClick={audumbla2} src={audumblaScared} /></div>
                <div className='character-thumbnail'><img className='avatar-thumbnail' onClick={audumbla3} src={audumblaHearts} /></div>
              </div>
            </div>
            <div><img className='audumbla-image avatar-slide' onClick={audumbla} src={imgs[10]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='absoluteContent' src={bgSlider} />
          <div className='content-slider'>
            <div className='info-slider'>
              <h1 className='title'>{subtitle3}</h1>
              <p className='text-slider'>{paragraph3}</p>
              <div className='thumbnails'>
                <div className='character-thumbnail'><img className='avatar-thumbnail' onClick={ve1} src={veSurprised} /></div>
                <div className='character-thumbnail'><img className='avatar-thumbnail' onClick={ve2} src={veConfused} /></div>
                <div className='character-thumbnail'><img className='avatar-thumbnail' onClick={ve3} src={veFlirtatious} /></div>
              </div>
            </div>
            <div><img className='ve-photo avatar-slide' onClick={ve} src={imgs[14]} /></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Slideshow
