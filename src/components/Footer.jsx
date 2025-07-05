import React from 'react'
import splash from '../assets/glasses1.png'

const Footer = () => {
  return (
    <div className='w-full py-20 bg-khaki1 flex'>

        <div className='sm:mx-20 mx-10 px-10 rounded-3xl bg-gray-200 sm:w-[45%] shadow-xl w-[80%] sm:h-[30vw] pb-10 pt-5 items-center align-middle'>

           <h1 className='text-4xl font-chomsky relative sm:left-[35%] text-khaki1 p-5'>Contact Us</h1>
           <div className='bg-khaki1 w-full h-[2px]'></div>

           <div className='sm:flex'>
           <div>
           <h1 className='text-khaki1 text-2xl font-chomsky px-5 pt-10 overflow-hidden'>Divyansh Pandit</h1>
           <p className='px-10 text-gray-800'>
  9A, The Imperial Towers, Altamount Road,<br />
  Mumbai, Maharashtra — 400026
</p>
<p className='px-10 text-gray-800'>ceo@auroracapitalgroup.com</p>
<p className='px-10 text-gray-800'>+91 90000 12345</p>

           </div>

           <div>

           <h1 className='text-khaki1 text-2xl font-chomsky px-5 pt-10 overflow-hidden'>Priyanshi</h1>
        <p className='px-10 text-gray-800'>
  1201, Celestia Heights, Golf Course Extension,<br />
  Gurugram, Haryana — 122018
</p>
<p className='px-10 text-gray-800'>priyanshi.s@luminexventures.co.in</p>
<p className='px-10 text-gray-800'>+91 98989 44221</p>

           </div>
           </div>
        </div>

         <div>
          <img className='w-160 sm:block hidden rotate-310' src={splash}></img>
         </div>
    </div>
  )
}

export default Footer