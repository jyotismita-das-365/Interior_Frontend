import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import WhatsAppFloating from './components/WhatsAppFloating'
// import Portfolio from './components/Portfolio'
import Bottom from './components/Bottom'
import Banner from './components/Banner'
import ModularKitchen from './components/Modularkitchen'
import LivingRoom from './components/LivingRoom'

function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <Services />
    <AboutUs />
    <WhatsAppFloating />
    <Bottom />
    {/* <ModularKitchen /> */}
    {/* <Portfolio /> */}
    {/* <LivingRoom /> */}
    </>
  )
}

export default App
