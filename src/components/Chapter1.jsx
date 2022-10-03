import { chapter1 } from '../data'
import imagecomic from '../data/imagechapter1'
import '../styles/components/sliderswiper.css'
import '../styles/components/chapter1.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

import sound from '../data/sounds.js'
import ReactHowler from 'react-howler'
import { Howl } from 'howler'

import { useState } from 'react'

const Chapter1 = () => {
  const { text1, text2, text3, text4, text5, text6, text7 } = chapter1
  const milk = () => {
    document.querySelector('.udder_bg').src = imagecomic[13]
    document.querySelector('p.textShadeMilk').style.display = 'none'
    efect7.play()
  }
  const animationBackground = () => {
    document.querySelector('.btnPlay').style.display = 'none'
    document.querySelector('.stars').classList.add('stars-move')
    document.querySelector('.ginnupgagap').classList.add('move_background')
    setsounds8(!sounds8)
  }
  const niflheim = () => {
    document.querySelector('.niflheimPlanet').src = imagecomic[5]
    document.querySelector('p.textShadeNiflheim').style.display = 'none'
    efect2.play()
  }
  const muselheim = () => {
    document.querySelector('.muselheimPlanet').src = imagecomic[32]
    document.querySelector('p.textShadeMuselheim').style.display = 'none'
    efect3.play()
  }
  const fusion = () => {
    document.querySelector('.muselheim-union').classList.toggle('muselheim-fusion')
    document.querySelector('.niflheim-union').classList.toggle('niflheim-fusion')
    document.querySelector('.planetEarth').classList.toggle('earth')
    efect4.play()
  }
  const flowerMove = () => {
    document.querySelector('.flower').classList.toggle('flower-move')
    document.querySelector('.textBox').classList.toggle('textBox-move')
    life.play()
    efect5.play()
  }
  const characters = () => {
    document.querySelector('.characterYmir').src = imagecomic[11]
    document.querySelector('p.textShadeCharacter').style.display = 'none'
    efect20.play()
  }
  const bubble = () => {
    document.querySelector('.nextBubble1').style.animation = 'none'
    document.querySelector('.nextBubble2').classList.toggle('bubble')
    document.querySelector('.nextBubble3').classList.toggle('bubble2')
    document.querySelector('.see-more-chapter2').classList.toggle('button-see-more')
  }

  const Hidden23 = () => {
    document.querySelector('.modal').style.display = 'block'
    efect21.play()
  }
  const Hidden24 = () => {
    document.querySelector('.modal').style.display = 'none'
    efect21.stop()
  }
  const [sounds, setsounds] = useState(false)
  const [sounds2, setsounds2] = useState(false)
  const [sounds3, setsounds3] = useState(false)
  const [sounds4, setsounds4] = useState(false)
  const [sounds5, setsounds5] = useState(false)
  const [sounds6, setsounds6] = useState(false)
  const [sounds7, setsounds7] = useState(false)
  const [sounds8, setsounds8] = useState(false)
  const [sounds9, setsounds9] = useState(false)

  const soundsSet = () => {
    setsounds(false)
    setsounds2(false)
    setsounds3(false)
    setsounds4(false)
    setsounds5(false)
    setsounds6(false)
    setsounds7(false)
    setsounds8(false)
    setsounds9(false)
  }
  const efect2 = new Howl({
    src: sound[22],
    html5: true
  })
  const efect3 = new Howl({
    src: sound[23],
    html5: true
  })
  const efect4 = new Howl({
    src: sound[25],
    html5: true
  })
  const efect5 = new Howl({
    src: sound[27],
    html5: true
  })
  const life = new Howl({
    src: sound[24],
    html5: true
  })
  const efect7 = new Howl({
    src: sound[26],
    html5: true
  })
  const efect20 = new Howl({
    src: sound[40],
    html5: true
  })
  const efect21 = new Howl({
    src: sound[41],
    html5: true
  })
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        className='chapter'
        onSlideChange={() => soundsSet()}
      >
        <SwiperSlide className='capitulo'>
          <img className='slide' src={imagecomic[22]} />
          <p className='chapterNumber'>Capítulo 1</p>
          <p className='chapterTitle'>La Nada</p>
          <div className='contentportada'>
            <div className='contentportada2'>
              <div><img className='image-cap capLeft' src={imagecomic[28]} /></div>
              <div><img className='image-cap capCenter' src={imagecomic[23]} /></div>
              <div><img className='image-cap capRight' src={imagecomic[29]} /></div>
            </div>
            <div><img className='image-cap capGo' src={imagecomic[30]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='scene'>
          <div><p className=' content-text-comic'>{text1}</p></div>
          <ReactHowler src={sound[0]} playing={sounds} />
          <ReactHowler src={sound[21]} loop playing={sounds8} />
          <button className='sound' onClick={() => setsounds(!sounds)}>
            <img src={imagecomic[21]} />
          </button>
          <img className='slide ginnupgagap' src={imagecomic[1]} />
          <div className='contentComic'>
            <div className='playButton'><button onClick={animationBackground}><img className='btnPlay' src={imagecomic[0]} /></button></div>
            <div><img className='stars' src={imagecomic[3]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='scene_2'>
          <div><p className='content-text-comic'>{text2}</p></div>
          <ReactHowler src={sound[1]} playing={sounds2} />
          <button className='sound' onClick={() => setsounds2(!sounds2)}>
            <img src={imagecomic[21]} />
          </button>
          <div className='contentCenter'><p className='textShadeNiflheim textShade textShade1'>Haz click en cualquier parte de la viñeta</p></div>
          <div className='contentComic'>
            <div><img onClick={niflheim} className='animationGif niflheimPlanet' src={imagecomic[33]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text3}</p></div>
          <ReactHowler src={sound[2]} playing={sounds3} />
          <button className='sound' onClick={() => setsounds3(!sounds3)}>
            <img src={imagecomic[21]} />
          </button>
          <div className='contentCenter'><p className='textShadeMuselheim textShade textShade1'>Haz click en cualquier parte de la viñeta</p></div>
          <div className='contentComic'>
            <div><img onClick={muselheim} className='animationGif muselheimPlanet' src={imagecomic[31]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text4}</p></div>
          <ReactHowler src={sound[3]} playing={sounds4} />
          <button className='sound' onClick={() => setsounds4(!sounds4)}>
            <img src={imagecomic[21]} />
          </button>
          <img onClick={fusion} className='slide' src={imagecomic[1]} />
          <div><img className='stars stars-move ' src={imagecomic[3]} /></div>
          <div className='contentComic'>
            <div className='fusionplanets'>
              <div className='niflheim-union box bounce-1'><img onClick={fusion} src={imagecomic[4]} /></div>
              <div className='muselheim-union box bounce-1'><img onClick={fusion} src={imagecomic[6]} /></div>
            </div>
            <div className='planet'><img className='planetEarth' src={imagecomic[8]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text5}</p></div>
          <ReactHowler src={sound[4]} playing={sounds5} />
          <button className='sound' onClick={() => setsounds5(!sounds5)}>
            <img src={imagecomic[21]} />
          </button>
          <img className='slide' src={imagecomic[9]} />
          <div className='contentComic'>
            <div className='contentCenter'><p className='textBox textBox1'>La vida brota</p></div>
            <img className='smoke' src={imagecomic[10]} />
            <div className='flower' onClick={flowerMove} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div><p className='content-text-comic'>{text6}</p></div>
          <ReactHowler src={sound[5]} playing={sounds6} />
          <button className='sound' onClick={() => setsounds6(!sounds6)}>
            <img src={imagecomic[21]} />
          </button>
          <div className='contentCenter'><p className='textShadeCharacter textShade textShade1'>Haz click en cualquier parte de la viñeta</p></div>
          <div className='contentComic'>
            <div><img onClick={characters} className='animationGif characterYmir' src={imagecomic[12]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='scene_7'>
          <div><p className='content-text-comic'>{text7}</p></div>
          <ReactHowler src={sound[6]} playing={sounds7} />
          <button className='sound' onClick={() => setsounds7(!sounds7)}>
            <img src={imagecomic[21]} />
          </button>
          <div className='contentCenter'><p className='textShadeMilk textShade textShade1'>Haz click en cualquier parte de la viñeta</p></div>
          <div className='contentComic'>
            <div><img onClick={milk} className='animationGif udder_bg' src={imagecomic[14]} /></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='nextChapter' src={imagecomic[16]} />
          <div className='contentComic'>
            <img className='nextBubble1' onClick={bubble} src={imagecomic[17]} />
            <img className='nextBubble2' src={imagecomic[18]} />
            <img className='nextBubble3' src={imagecomic[19]} />
          </div>
          <div className='see-more-chapter2'><Link className='link-comic' to='/ComicChapter2'>Siguiente capítulo</Link></div>
        </SwiperSlide>
      </Swiper>
      <ReactHowler src={sound[41]} playing={sounds9} />
      <button className='help' id='btn-modal' onClick={Hidden23}>
        <img className='lbl-modal' src={imagecomic[24]} />
      </button>
      <div className='modal'>
        <div className='contentModal'>
          <h2>¡Bienvenid@!</h2>
          <button id='btn-modal' className='btn-close' onClick={Hidden24}>
            X
          </button>
          <div className='textModal'>
            <p>Sigue las indicaciones para que tu experiencia en AMALDIS sea la mejor:</p>
            <ul>
              <div className='nota1'>
                <img className='check' src={imagecomic[25]} />
                <li>Dale click según las indicaciones de cada viñeta para ver las animaciones.</li>
              </div>
              <div className='nota1'>
                <img className='check' src={imagecomic[25]} />
                <li>Presiona el ícono de sonido para escuchar la narración de cada viñeta.</li>
              </div>
              <div className='nota1'>
                <img className='check' src={imagecomic[25]} />
                <li>Cuando termines cada capítulo habrá un botón que te mandará al siguiente.</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className='mobile'>
        <img className='img-mobile1' src={imagecomic[26]} />
        <img className='img-mobile2' src={imagecomic[27]} />
      </div>
    </div>
  )
}

export default Chapter1
