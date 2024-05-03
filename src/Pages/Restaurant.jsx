import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Khuyenmai, SpecialMenu } from '../container';
import { Navbar } from '../components';
import { Product } from '../components';
const Restaurant = () => {
  return (
    <div >
      <Navbar />
      <Header />
      <Product />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Khuyenmai />
      {/* <Gallery /> */}
      <FindUs />
      <Footer />

    </div>
  )
}

export default Restaurant