import { lazy, Suspense } from 'react'
import Loading from '../components/Loading'
import BannerComic from '../components/BannerComic'
import Footer from '../components/Footer'

const Chapter2 = lazy(() => import('../components/Chapter2'))

const ComicChapter2 = () => {
  return (
    <>
      <BannerComic />
      <Suspense fallback={<Loading />}>
        <Chapter2 />
      </Suspense>
      <Footer />
    </>
  )
}

export default ComicChapter2
