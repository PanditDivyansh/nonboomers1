import React, { useState } from 'react';
import bgtable from '../assets/tablebg.jpg'

const Flipbook = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div data-scroll data-scroll-section
  className="w-full min-h-screen flex justify-center items-center py-20  bg-cover bg-center border-2"
  style={{ backgroundImage: `url(${bgtable})` }}
>
      <div className="flip-container sm:w-[30vw] sm:h-[40vw] w-[80vw] h-[120vw] relative sm:left-[15%]" onClick={() => setFlipped(!flipped)}>
        <div className={`relative book w-full h-full ${flipped ? 'flipped' : ''}`}>
          {/* Front Cover */}
          <div className="page bg-gray-500 rounded-3xl flex">
            <div className="sm:w-[2vw] sm:h-[40vw] w-[4vw] h-[120vw] bg-gray-800 rounded-l-3xl" />
            <h1 className="relative top-[30%] font-chomsky text-4xl sm:px-20 px-3 text-gray-700 drop-shadow-[2px_4px_3px_rgba(0,0,0,0.2)]">
              The Domestication <br /> Of Gifted Rebels
            </h1>
          </div>

          {/* Inside Page */}
          <div className="page back-page bg-white rounded-3xl p-6 text-gray-700 font-serif text-lg leading-relaxed">
            {/* <p>
              Gifted individuals often find themselves misunderstood in a world that values compliance over creativity.
              This page explores how society tames its most brilliant minds...
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipbook;
