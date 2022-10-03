import { lazy, Suspense } from 'react'
import Loading from '../components/Loading'
import BannerComic from '../components/BannerComic'
import Footer from '../components/Footer'

const Chapter1 = lazy(() => import('../components/Chapter1'))

const ComicChapter1 = () => {
  return (
    <>
      <BannerComic />
      <Suspense fallback={<Loading />}>
        <Chapter1 />
      </Suspense>
      <Footer />
    </>
  )
}

export default ComicChapter1
