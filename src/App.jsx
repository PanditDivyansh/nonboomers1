import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/landing'
import leaf3 from './assets/leaves/leaf3.png'


const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Landing/>
      <img src={leaf3}></img>
    </div>
  )
}

export default App