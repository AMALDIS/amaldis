import { chapter2 } from '../data'
import imagecomic from '../data/imagechapter1'
import imagechapter2 from '../data/imagechapter2'
import '../styles/components/sliderswiper.css'
import '../styles/components/chapter1.css'
import '../styles/components/chapter2.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

import sound from '../data/sounds.js'
import ReactHowler from 'react-howler'
import { Howl } from 'howler'

import { useState } from 'react'

const Chapter2 = () => {
  const { text1, text2, text3, text4, text5, text6, text7 } = chapter2
  const animationRiver = () => {
    document.querySelector('.audumblaProfile').style.animation = 'none'
    document.querySelector('.river').classList.add('river-move')
    document.querySelector('.riverMilk').classList.add('riverMilk-move')
    efect8.play()
  }
  const rock = () => {
    document.querySelector('p.textShadeSon').style.display = 'none'
    document.querySelector('.imageRock').src = imagechapter2[24]
  }
  const animationDrop = () => {
    document.querySelector('.drop').classList.toggle('drop_move')
    document.querySelector('.ymirSleeping').classList.toggle('ymirSleeping_move')
    document.querySelector('.footYmir').classList.toggle('footYmir_move')
    efect11.play()
  }
  const animationFlicker = () => {
    document.querySelector('p.textShadeFlicker').style.display = 'none'
    document.querySelector('.ymirFlicker').src = imagechapter2[12]
    efect12.play()
  }
  const animationRing = () => {
    document.querySelector('.brothers').classList.toggle('brothers-move')
  }
  const changeAudumbla = () => {
    document.querySelector('p.textShadeAudumbla').style.display = 'none'
    document.querySelector('.audumblaSleeping').src = imagechapter2[26]
    efect9.play()
  }
  const brothersMove = () => {
    document.querySelector('p.textShadeBrothers').style.display = 'none'
    document.querySelector('.screenbrothers').src = imagechapter2[19]
    efect22.play()
  }
  const bubble = () => {
    document.querySelector('.nextBubble1').style.animation = 'none'
    document.querySelector('.nextBubble2').classList.toggle('bubble')
    document.querySelector('.nextBubble3').classList.toggle('bubble2')
    document.querySelector('.see-more-chapter3').classList.toggle('button-see-more')
  }
  const [sounds, setsounds] = useState(false)
  const [sounds2, setsounds2] = useState(false)
  const [sounds3, setsounds3] = useState(false)
  const [sounds4, setsounds4] = useState(false)
  const [sounds5, setsounds5] = useState(false)
  const [sounds6, setsounds6] = useState(false)
  const [sounds7, setsounds7] = useState(false)

  const soundsSet = () => {
    setsounds(false)
    setsounds2(false)
    setsounds3(false)
    setsounds4(false)
    setsounds5(false)
    setsounds6(false)
    setsounds7(false)
  }
  const efect8 = new Howl({
    src: sound[28],
    html5: true
  })
  const efect9 = new Howl({
    src: sound[29],
    html5: true
  })
  const efect11 = new Howl({
    src: sound[30],
    html5: true
  })
  const efect12 = new Howl({
    src: sound[31],
    html5: true
  })
  const efect22 = new Howl({
    src: sound[42],
    html5: true
  })
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        tag='section'
        className='chapter'
        onSlideChange={() => soundsSet()}
      >
        <SwiperSlide className='capitulo'>
          <img className='slide' src={imagecomic[22]} />
          <p className='chapterNumber'>Capítulo 2</p>
          <p className='chapterTitle'>Descubrimiento</p>
          <div className='contentportada'>
            <div className='contentportada2'>
              <div><img className='image-cap capLeft' src={imagecomic[28]} /></div>
              <div><img className='image-cap capCenter' src={imagecomic[23]} /></div>
              <div><img className='image-cap capRight' src={imagecomic[29]} /></div>
            </div>
            <div><img className='image-cap capGo' src={imagecomic[30]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic-down'>{text1}</p></div>
          <ReactHowler src={sound[7]} playing={sounds} />
          <button className='sound' onClick={() => setsounds(!sounds)}>
            <img src={imagecomic[21]} />
          </button>
          <img className='slide' src={imagechapter2[0]} />
          <div><img onClick={animationRiver} className='audumblaProfile' src={imagechapter2[1]} /></div>
          <img className='riverMilk' src={imagechapter2[20]} />
          <div className='contentComic'>
            <div className='river' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic-down'>{text2}</p></div>
          <div className='contentCenter'><p className='textShadeAudumbla textShade textShade2'>Haz click en cualquier parte de la viñeta</p></div>
          <ReactHowler src={sound[8]} playing={sounds2} />
          <button className='sound' onClick={() => setsounds2(!sounds2)}>
            <img src={imagecomic[21]} />
          </button>
          <img className='slide audumblaSleeping' onClick={changeAudumbla} src={imagechapter2[25]} />
        </SwiperSlide>
        <SwiperSlide className='scene_3'>
          <div><p className='content-text-comic-down'>{text3}</p></div>
          <div className='contentCenter'><p className='textShadeSon textShade textShade2'>Haz click en cualquier parte de la viñeta</p></div>
          <ReactHowler src={sound[9]} playing={sounds3} />
          <button className='sound' onClick={() => setsounds3(!sounds3)}>
            <img src={imagecomic[21]} />
          </button>
          <img className='slide imageRock' onClick={rock} src={imagechapter2[23]} />
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic-down'>{text4}</p></div>
          <ReactHowler src={sound[10]} playing={sounds4} />
          <button className='sound' onClick={() => setsounds4(!sounds4)}>
            <img src={imagecomic[21]} />
          </button>
          <img className='slide' src={imagechapter2[8]} />
          <div className='contentComic'>
            <div className='contentCenter'><img onClick={animationDrop} className='drop' src={imagechapter2[10]} /></div>
            <div className='contentCenter'><img className='ymirSleeping' src={imagechapter2[9]} /></div>
            <div className='footY'><img className='footYmir' src={imagechapter2[11]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text5}</p></div>
          <ReactHowler src={sound[11]} playing={sounds5} />
          <button className='sound' onClick={() => setsounds5(!sounds5)}>
            <img src={imagecomic[21]} />
          </button>
          <div className='contentCenter'><p className='textShadeFlicker textShade textShade3'>Haz click en cualquier parte de la viñeta</p></div>
          <div className='contentComic'>
            <div className='contentCenter'><p className='textBox textBox1'>Ahora no están solos</p></div>
            <div><img onClick={animationFlicker} className='animationGif ymirFlicker' src={imagechapter2[27]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic-down'>{text6}</p></div>
          <ReactHowler src={sound[12]} playing={sounds6} />
          <button className='sound' onClick={() => setsounds6(!sounds6)}>
            <img src={imagecomic[21]} />
          </button>
          <img className='slide' src={imagechapter2[14]} />
          <div><img className='slide brothers' src={imagechapter2[18]} /></div>
          <div className='contentComic'>
            <div className='hands'>
              <div className='handLeft'><img src={imagechapter2[15]} /></div>
              <div className='handRight'>
                <div><img src={imagechapter2[16]} /></div>
                <div><img onClick={animationRing} className='ring' src={imagechapter2[17]} /></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic-down'>{text7}</p></div>
          <ReactHowler src={sound[13]} playing={sounds7} />
          <button className='sound' onClick={() => setsounds7(!sounds7)}>
            <img src={imagecomic[21]} />
          </button>
          <div className='contentCenter'><p className='textShadeBrothers textShade textShade2'>Haz click en cualquier parte de la viñeta</p></div>
          <img onClick={brothersMove} className='slide screenbrothers' src={imagechapter2[21]} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='nextChapter' src={imagecomic[16]} />
          <div className='contentComic'>
            <img className='nextBubble1' onClick={bubble} src={imagecomic[17]} />
            <img className='nextBubble2' src={imagecomic[18]} />
            <img className='nextBubble3' src={imagecomic[19]} />
            <div className='see-more-chapter3'><Link className='link-comic' to='/ComicChapter3'>Siguiente capítulo</Link></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='mobile'>
        <img className='img-mobile1' src={imagecomic[26]} />
        <img className='img-mobile2' src={imagecomic[27]} />
      </div>
    </div>
  )
}

export default Chapter2
