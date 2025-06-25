import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import leaf3 from './assets/leaves/leaf3.png'
import Marquee from './components/Marquee'
import Indexlist from './components/Indexlist'
import LocomotiveScroll from 'locomotive-scroll'
import Index from './components/Index'



const App = () => {
  const locomotivescroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-gray-200'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <Indexlist/>
    </div>
  )
}

export default App
