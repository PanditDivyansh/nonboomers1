import React, { useState } from 'react'

const Indexlist = () => {
  const [meaning, setmeaning] = useState(false);

  return (
    <div data-scroll data-scroll-speed="-0.08" data-scroll-section  className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-b2gray'>
      <div
        className='transition-all duration-700 ease-in-out'
      >
        <h1
          className={`alex sm:text-5xl sm:px-30 px-10 text-lg py-4 mx-auto drop-shadow-[2px_4px_3px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out ${
            meaning
              ? 'bg-gray-200 text-b2gray w-[90%] rounded-2xl px-10'
              : 'text-gray-200 bg-transparent w-full'
          }`}
        >
          {meaning
            ? 'The man who never alters his opinion is like standing water, and breeds reptiles of the mind.'
            : '" The man who never altereth his opinion is like unto standing water, And breedeth therein the noisome reptiles of the mind."'}
        </h1>
        <div className='sm:text-4xl sm:px-30 px-10 pt-4 text-gray-300 alex text-right leading-[2vw] drop-shadow-[2px_4px_3px_rgba(0,0,0,0.3)] transition-opacity duration-700'>
          <h1>- William Blake (1790–1793)</h1>
        </div>
      </div>

      <div className='w-full h-[1px] bg-white my-10'></div>


       <h1 className='text-center font-chomsky text-6xl text-khaki1'>Index</h1>
      <div className='w-full flex justify-center items-center pb-10 bg-b2gray'>
      
  <table className='w-[90%] text-left border-separate border-spacing-y-4'>
    {/* <thead>
      <tr className='text-khaki1 text-6xl font-chomsky tracking-wide'>
        <th className='pb-4'>Title</th>
        <th className='pb-4'>Link</th>
      </tr>
    </thead> */}
    <tbody>
      <tr className='bg-gray-200 bg-opacity-80 rounded-2xl shadow-md backdrop-blur-md'>
        <td className='py-4 px-6 text-b2gray font-chomsky text-xl'>1. The Domestication of Gifted Rebels</td>
        <td className='py-4 px-6'>
          <a
            href="#"
            className='text-khaki2 underline hover:text-orange-900 transition duration-300 font-alex text-lg'
          >
            link
          </a>
        </td>
      </tr>
      <tr className='bg-gray-200 bg-opacity-80 rounded-2xl shadow-md backdrop-blur-md mt-4'>
        <td className='py-4 px-6 text-b2gray font-chomsky text-xl'>2. Stitches</td>
        <td className='py-4 px-6'>
          <a
            href="#"
            className='text-khaki2 underline hover:text-orange-900 transition duration-300 font-alex text-lg'
          >
            link
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Indexlist;
