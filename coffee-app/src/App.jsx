import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Discover from './components/Discover'
import Menu from './components/Menu'
import AboutUs from './components/AboutUs'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Discover/>
      <Menu/>
      <AboutUs/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
