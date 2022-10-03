import { lazy, Suspense } from 'react'
import Loading from '../components/Loading'
import BannerComic from '../components/BannerComic'
import Footer from '../components/Footer'

const Chapter3 = lazy(() => import('../components/Chapter3'))

const ComicChapter3 = () => {
  return (
    <>
      <BannerComic />
      <Suspense fallback={<Loading />}>
        <Chapter3 />
      </Suspense>
      <Footer />
    </>
  )
}

export default ComicChapter3
