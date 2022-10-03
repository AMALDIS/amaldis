import { lazy, Suspense } from 'react'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Project = lazy(() => import('../components/Project'))
const Slideshow = lazy(() => import('../components/Slideshow'))
const Mythology = lazy(() => import('../components/Mythology'))
const WorkTeam = lazy(() => import('../components/WorkTeam'))

const LandingPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Project />
        <Slideshow />
        <Mythology />
        <WorkTeam />
      </Suspense>
      <Footer />
    </>
  )
}

export default LandingPage
