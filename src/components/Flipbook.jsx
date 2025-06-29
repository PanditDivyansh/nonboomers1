import React, { useEffect, useState } from 'react';
import bgtable from '../assets/tablebg.jpg'
import coffee from '../assets/coffee.png'
import leaf4 from '../assets/leaves/leaf4.png'
import pen from '../assets/pen.png'

const Flipbook = () => {
  const [flipped, setFlipped] = useState(false);
  const [showpage,setshowpage] = useState(false);

  useEffect(()=>{
      if(flipped){
        setTimeout(() => 
          setshowpage(true)
        , 100);
      }
  },[]);

  return (
    <div data-scroll data-scroll-section
  className="w-full min-h-screen flex justify-center items-center py-20  bg-gray-200 border-2 relative"
  s
>

     
      {/* <img className='absolute rotate-45 sm:left-[-5%] sm:w-100' src={leaf4}></img> */}
      <img className='absolute rotate-115 sm:left-[25%] left-[-30%] sm:top-40 top-[65%]  sm:w-100 w-65' src={pen}></img>
      <img className='absolute rotate-135 sm:left-[10%] sm:top-40 top-[80%]  sm:w-100 w-[65vw]' src={coffee}></img>
      
      
      <img className='absolute rotate-135 sm:left-[15%] left-[-30%]  sm:w-100 w-65' src={leaf4}></img>
      <div className='sm:w-[30vw] sm:h-[40vw] w-[80vw] h-[120vw] sm:left-[50%] absolute bg-white rounded-3xl'></div>
      
      <div className="flip-container sm:w-[30vw] sm:h-[40vw] w-[80vw] h-[120vw] relative sm:left-[15%] " onClick={() => setFlipped(!flipped)}>
        <div className={`relative book w-full h-full ${flipped ? 'flipped' : ''}`}>
          {/* Front Cover */}
          <div className="page bg-orange-800 rounded-3xl flex z-20">
            <div className="sm:w-[2vw] sm:h-[40vw] w-[4vw] h-[120vw] bg-gray-800 rounded-l-3xl z-30" />
            <h1 className="relative top-[30%] font-chomsky text-4xl sm:px-20 px-3 text-gray-200 drop-shadow-[2px_4px_3px_rgba(0,0,0,0.2)]">
              The Domestication <br /> Of Gifted Rebels
            </h1>
            <h2 className='absolute top-[70%] sm:left-[43%] left-[40%] font-chomsky text-orange-950'>Tap to Open</h2>
          </div>

          {/* Inside Page */}
          <div className="page back-page bg-white rounded-3xl p-6 text-gray-700 font-serif text-lg leading-relaxed">
            {/* <p>
              Gifted individuals often find themselves misunderstood in a world that values compliance over creativity.
              This page explores how society tames its most brilliant minds...
            </p> */}
          </div>

          
        </div>
      <div
  className={`absolute top-0 left-0 w-[100%] h-[100%] bg-white rounded-3xl py-10 px-7 text-gray-700 font-serif text-lg leading-relaxed z-10 flex overflow-y-auto overflow-x-hidden ${
    flipped ? 'opacity-100 page-content' : 'opacity-0 pointer-events-none page-content'
  }`}
>
<div className='w-[0.1vw] h-full bg-black z-30 relative left-[-6%]'></div>
            <div className="page-content text-gray-800 font-serif text-lg leading-relaxed py-10">
              <h2 className="font-chomsky text-2xl mb-2">The Domestication Of Gifted Rebels </h2>
              
              <p className='text-sm py-10'>
               I personally as the string puller of this webbed discussion, would not like a very large potential audience to be a part of it. Unusual? Uh? Let’s see, the part of this population that I want to be exempted from this conversation, we already call them boomers. Ever thought why, we, who were meant to be the prime consumers of the Facebook completely left it behind and shifted to Instagram and other social media? Because most of us started getting friend requests from our own Rishtedaars bc and on not accepting them we were being called out publicly. Most of us at that time didn’t even know what ‘intrusion of privacy’ meant as a phrase at that time, but we felt irritated and the next step? Shifting to some other social networking site clearing all the traces behind as we were the one at fault.<br></br><br></br>
Got the gist of discussion? Not yet? Let me arm myself with some blunt sentences so that I can hurt you enough to resonate. Ever been mocked on your decisions by your own people?  Ever felt ‘I will do it’ one moment and ‘I am a corrupted piece of crow shit’ the very next? Pathetic, isn’t it? Well, if not, congratulations you have been brought up in a pretty fancy and healthy environment. Anyways, it is just my observation lately that when I was a kid , a lot of kids around me were quite ambitious, and were quite courageous but today when I look around I see just people pleasers everywhere, young people have become people pleasers, and they would do anything to just get some form of recognition or whatever they feel they will get doing it. <br></br><br></br>
Although I know that your attention span has left the chat till here, I would like to remind that the real conversation starts from here. Let’s deep dive into the second part of the phrase : “ Gifted ”. The author (obviously me but glorified) has derived a conclusion based on his experiences and observations, ever since when he was a toddler admitted to the domestication academy (school). He saw that the kids around him, each of them was very good at something , some were amazing at sports , some were actually good at drawings and other creative works but none of them were actually celebrated like the author himself as he was often associated with his sharp mindedness around academics and as he grew he acquired several other talents like playing flute etc still none of them were celebrated. As he finally approached the age where he can think and question, these talents in people around him seems to have vanished.<br></br><br></br>
Isn’t it what they do to the animals who are captured by the zoo? “Domestication”? The lion’s cub (sher ka bachha) who was born with enormous strength, agility and courage who was meant to rule the jungle and roar so loud that even an animal thrice his size had to bow before him, is now trying to show people that he can jump and sit on a chair, to get some likes and comments , oh sorry I forgot I was using the lion’s metaphor , hey Siri, correct the likes and comments to claps and cheers.<br></br><br></br>
So no matter how much we say we love our parents, which we all obviously do, we must criticize them for the fact that we hadhave been grown in such athe afore mentioned way, and this is where I would have concluded the discussion two years ago but in that case I would have been naïve. I would have missed the roots. The boomers are boomers for a reason, the difference between us and them is the fact that we have been exposed to a lot of information at our fingertips. They were domesticated at a very large scale than us. Scientists call it mental conditioning, and now they are at the age they would not like to change the way they think and behave, so according to me, even if we try to change the boomer generation, they will never acknowledge that they have been conditioned. Chances are that they may feel attacked, so my advice is don’t even try as this will not change anything.<br></br><br></br>
So, there must be something that we can do “to be ourselves”. Well, all you need is just the realization, not for just today but a long and sustainable realization, because I also believe in the “rebel” that is present inside you and the fact that if you know that you are being controlled you will never be controlled. <br></br><br></br>
<b>“Be the Bull that does not believe in the chains.”</b> <br></br> <br></br>


              </p>
            </div>
          </div>
      </div>

      

      
    </div>
  );
};

export default Flipbook;
