import '../styles/components/chapters.css'
import imgs from '../data/imgs'

import { Link } from 'react-router-dom'

const Chapters = () => {
  const chapter1 = () => {
    document.querySelector('.chapter-1').src = imgs[3]
  }
  const chapter2 = () => {
    document.querySelector('.chapter-2').src = imgs[4]
  }
  const chapter3 = () => {
    document.querySelector('.chapter-3').src = imgs[5]
  }
  const chapter1Out = () => {
    document.querySelector('.chapter-1').src = imgs[0]
  }
  const chapter2Out = () => {
    document.querySelector('.chapter-2').src = imgs[1]
  }
  const chapter3Out = () => {
    document.querySelector('.chapter-3').src = imgs[2]
  }
  return (
    <div className='cards-chapters'>
      <div className='card-chapter1'>
        <Link className='link-comic' to='/ComicChapter1'><picture><img className='card-image chapter-1' onMouseOver={chapter1} src={imgs[0]} onMouseOut={chapter1Out} /></picture></Link>
        <Link className='link-comic' to='/ComicChapter1'><h3>La Nada</h3></Link>
      </div>
      <div className='card-chapter2'>
        <Link className='link-comic' to='/ComicChapter2'><picture><img className='card-image chapter-2' onMouseOver={chapter2} src={imgs[1]} onMouseOut={chapter2Out} /></picture></Link>
        <Link className='link-comic' to='/ComicChapter2'><h3>Descubrimiento</h3></Link>
      </div>
      <div className='card-chapter3'>
        <Link className='link-comic' to='/ComicChapter3'><picture><img className='card-image chapter-3' onMouseOver={chapter3} src={imgs[2]} onMouseOut={chapter3Out} /></picture></Link>
        <Link className='link-comic' to='/ComicChapter3'><h3>Creación</h3></Link>
      </div>
    </div>
  )
}

export default Chapters
