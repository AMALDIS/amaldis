import { lazy, Suspense } from 'react'
import Loading from '../components/Loading'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Chapters = lazy(() => import('../components/Chapters'))

const ChaptersComic = () => {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        <Chapters />
      </Suspense>
      <Footer />
    </>
  )
}

export default ChaptersComic
