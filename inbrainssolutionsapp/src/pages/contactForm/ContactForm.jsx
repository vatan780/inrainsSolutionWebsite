import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import ContactComponent from './ContactComponent'
import { useLocation } from 'react-router-dom'

const ContactForm = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    
    <>
    <Navbar/>
    <ContactComponent/>
    <Footer/>
    
    </>
  )
}

export default ContactForm
