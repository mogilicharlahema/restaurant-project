import React from 'react'
import Navbar from '../Navbar/Navbar'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../../container'
import Home2 from '../booktable/home2/home2'

export default function Home() {
  return (
    <>
    <Navbar/>
  
    
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </>
  )
}
