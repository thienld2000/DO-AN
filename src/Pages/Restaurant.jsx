import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../container';
import { Navbar } from '../components';
import { Product } from '../components';
const Restaurant = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Product />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />

    </div>
  )
}

export default Restaurant