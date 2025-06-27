import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import leaf3 from './assets/leaves/leaf3.png'
import Marquee from './components/Marquee'
import Indexlist from './components/Indexlist'
import LocomotiveScroll from 'locomotive-scroll'
import Flipbook from './components/Flipbook'
import bgtable from './assets/tablebg.jpg'
import Footer from './components/footer'




const App = () => {
  const locomotivescroll = new LocomotiveScroll();

  

  return (
    <div className='w-full min-h-screen bg-gray-200' style={{ backgroundImage: `url(${bgtable})` }}>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <Indexlist/>
      <Flipbook/>
      <Footer/>
    </div>
  )
}

export default App