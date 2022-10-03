import { chapter3 } from '../data'
import imagechapter3 from '../data/imagechapter3'
import imagecomic from '../data/imagechapter1'
import '../styles/components/sliderswiper.css'
import '../styles/components/chapter1.css'
import '../styles/components/chapter2.css'
import '../styles/components/chapter3.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import sound from '../data/sounds.js'
import ReactHowler from 'react-howler'
import { Howl } from 'howler'

import { useState } from 'react'

const Chapter3 = () => {
  const { text1, text2, text3, text4, text5, text6 } = chapter3
  const weapons = () => {
    document.querySelector('p.textShade2').style.display = 'none'
    document.querySelector('.weapons').src = imagechapter3[0]
    efect13.play()
  }
  const fight = () => {
    document.querySelector('.ymirdead').style.animation = 'none'
    document.querySelector('.fight').classList.toggle('fight_brothers')
    document.querySelector('.fight2').classList.toggle('fight_brothers')
    document.querySelector('.fight3').classList.toggle('fight_brothers')
    document.querySelector('.blood').classList.toggle('blood_move')
    document.querySelector('.textBox2').classList.toggle('textBox-move')
    efect14.play()
  }
  const river = () => {
    document.querySelector('p.textShadeRiver').style.display = 'none'
    document.querySelector('.river_blood').src = imagechapter3[4]
    efect15.play()
  }
  const changeWorld = () => {
    document.querySelector('.cloud').style.animation = 'none'
    document.querySelector('.rocks').style.animation = 'none'
    document.querySelector('.jungle').style.animation = 'none'
    document.querySelector('.cloud').src = imagechapter3[9]
    document.querySelector('.rocks').src = imagechapter3[10]
    document.querySelector('.jungle').src = imagechapter3[11]
    efect16.play()
  }
  const planet = () => {
    document.querySelector('p.textShadePlanet').style.display = 'none'
    document.querySelector('.stars').src = imagechapter3[6]
    efect17.play()
  }
  const godOdin = () => {
    document.querySelector('p.textShade3').style.display = 'none'
    document.querySelector('.god_odin').src = imagechapter3[7]
    efect18.play()
  }
  const island = () => {
    document.querySelector('p.textShadeIsland').style.display = 'none'
    document.querySelector('.island_move').src = imagechapter3[8]
    document.querySelector('.textBox3').classList.toggle('textBox-move')
    setsounds7(!sounds7)
    efect17.play()
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
    setsounds5(false)
    setsounds6(false)
    setsounds7(false)
  }
  const efect13 = new Howl({
    src: sound[33],
    html5: true
  })
  const efect14 = new Howl({
    src: sound[34],
    html5: true
  })
  const efect15 = new Howl({
    src: sound[35],
    html5: true
  })
  const efect16 = new Howl({
    src: sound[36],
    html5: true
  })
  const efect17 = new Howl({
    src: sound[37],
    html5: true
  })
  const efect18 = new Howl({
    src: sound[38],
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
          <p className='chapterNumber'>Capítulo 3</p>
          <p className='chapterTitle'>Creación</p>
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
          <div><p className='content-text-comic'>{text1}</p></div>
          <ReactHowler src={sound[14]} playing={sounds} />
          <button className='sound' onClick={() => setsounds(!sounds)}>
            <img src={imagechapter3[22]} />
          </button>
          <div className='contentCenter'><p className='textShade textShade2'>Haz click en cualquier parte de la viñeta</p></div>
          <div className='content-comic'>
            <img onClick={weapons} className='screen weapons' src={imagechapter3[12]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text2}</p></div>
          <ReactHowler src={sound[15]} playing={sounds2} />
          <button className='sound' onClick={() => setsounds2(!sounds2)}>
            <img src={imagechapter3[22]} />
          </button>
          <div className='contentCenter'><p className='textBox textBox2'>¡La muerte!</p></div>
          <div className='dead'>
            <img className='ymirdead' onClick={fight} src={imagechapter3[2]} />
            <img className='blood' src={imagechapter3[3]} />
            <div className='fight' />
            <div className='fight2' />
            <div className='fight3' />
            <img className='slide' src={imagechapter3[1]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text3}</p></div>
          <ReactHowler src={sound[16]} playing={sounds3} />
          <button className='sound' onClick={() => setsounds3(!sounds3)}>
            <img src={imagechapter3[22]} />
          </button>
          <div className='contentCenter'><p className='textShade textShade2 textShadeRiver'>Haz click en cualquier parte de la viñeta</p></div>
          <img onClick={river} className='screen river_blood' src={imagechapter3[15]} />
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text4}</p></div>
          <ReactHowler src={sound[17]} playing={sounds4} />
          <button className='sound' onClick={() => setsounds4(!sounds4)}>
            <img src={imagechapter3[22]} />
          </button>
          <div className='word' onClick={changeWorld}>
            <img className='cloud' src={imagechapter3[19]} />
            <img className='rocks' src={imagechapter3[20]} />
            <img className='jungle' src={imagechapter3[21]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text5}</p></div>
          <ReactHowler src={sound[18]} playing={sounds5} />
          <button className='sound' onClick={() => setsounds5(!sounds5)}>
            <img src={imagechapter3[22]} />
          </button>
          <div className='contentCenter'><p className='textShade textShade1 textShadePlanet'>Haz click en cualquier parte de la viñeta</p></div>
          <div className='content-comic'>
            <img onClick={planet} className='stars' src={imagechapter3[5]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text6}</p></div>
          <ReactHowler src={sound[19]} playing={sounds6} />
          <button className='sound' onClick={() => setsounds6(!sounds6)}>
            <img src={imagechapter3[22]} />
          </button>
          <div className='contentCenter'><p className='textShade textShade3'>Haz click en cualquier parte de la viñeta</p></div>
          <img onClick={godOdin} className='screen god_odin' src={imagechapter3[14]} />
        </SwiperSlide>
        <SwiperSlide>
          <div className='contentCenter'><p className='textShade textShadeIsland'>Haz click en cualquier parte de la viñeta</p></div>
          <ReactHowler src={sound[20]} playing={sounds7} />
          <div className='content-comic'>
            <img onClick={island} className='screen island_move' src={imagechapter3[13]} />
            <p className='textBox textBox3'>FIN</p>
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

export default Chapter3
