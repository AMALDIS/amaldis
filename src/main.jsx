import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import ComicChapter1 from './routes/ComicChapter1'
import ComicChapter2 from './routes/ComicChapter2'
import ComicChapter3 from './routes/ComicChapter3'
import ChaptersComic from './routes/ChaptersComic'
import 'swiper/css/bundle'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ComicChapter1' element={<ComicChapter1 />} />
        <Route path='/ComicChapter2' element={<ComicChapter2 />} />
        <Route path='/ComicChapter3' element={<ComicChapter3 />} />
        <Route path='/Chapters' element={<ChaptersComic />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
)
