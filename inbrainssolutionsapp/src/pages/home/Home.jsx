import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import VideoSection from '../videoSection/VideoSection'
import OurServices from '../ourServicesSection/ourServices'
import Footer from '../footer/Footer'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <VideoSection />
      <OurServices />
      <Footer />


    </>
  )
}

export default Home
