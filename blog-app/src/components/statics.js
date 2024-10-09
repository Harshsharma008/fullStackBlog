 "use client"
// function Statics() {
//   return (
//     <div>
//           <section class="text-gray-600 body-font">
//               <div class="container px-5 py-27 mx-auto">
//                   <div class="flex flex-wrap -m-4 text-center">
//                       <div class="p-4 sm:w-1/5 w-1/2">
//                           <h2 class="title-font font-bold sm:text-2xl text-2xl text-gray-900">5</h2>
//                           <p class="leading-relaxed font-bold">Year of Trading Experience</p>
//                       </div>
//                       <div class="p-4 sm:w-1/5 w-1/2">
//                           <h2 class="title-font font-bold sm:text-2xl text-2xl text-gray-900">4+</h2>
//                           <p class="leading-relaxed"><span className="font-bold">Products</span> under Development</p>
//                       </div>
//                       <div class="p-4 sm:w-1/5 w-1/2">
//                           <h2 class="title-font font-bold sm:text-2xl text-2xl text-gray-900">6</h2>
//                           <p class="leading-relaxed font-bold">Year of Enterprenureship</p>
//                       </div>
//                       <div class="p-4 sm:w-1/5 w-1/2">
//                           <h2 class="title-font font-bold sm:text-2xl text-2xl text-gray-900">1M</h2>
//                           <p class="leading-relaxed font-bold">Market Investment</p>
//                       </div>
//                       <div class="p-4 sm:w-1/5 w-1/2">
//                           <h2 class="title-font font-bold sm:text-2xl text-2xl text-gray-900">120%</h2>
//                           <p class="leading-relaxed font-bold">Max Market Return</p>
//                       </div>
//                   </div>
//               </div>
//           </section>
//     </div>
//   )
// }

// export default Statics

import CountUp from 'react-countup';
import { useState, useEffect } from 'react';

function Statics() {
  // Optional: Delay to trigger rotation only once the numbers appear
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500); // Delay for the effect to start
  }, []);

  return (
    <div className='pt-5 pb-5 bg-white'>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-27 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/5 w-1/2">
              <h2 className={`title-font font-bold sm:text-2xl text-2xl text-gray-900 `}>
                <CountUp start={0} end={5} duration={2.5} />
              </h2>
              <p className="leading-relaxed font-bold text-black">Year of Trading Experience</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <h2 className={`title-font font-bold sm:text-2xl text-2xl text-black `}>
                <CountUp start={0} end={4} duration={2.5} suffix="+" />
              </h2>
              <p className="leading-relaxed text-black"><span className="font-bold text-black">Products</span> under Development</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <h2 className={`title-font font-bold sm:text-2xl text-2xl text-black `}>
                <CountUp start={0} end={6} duration={2.5} />
              </h2>
              <p className="leading-relaxed font-bold text-black">Year of Entrepreneurship</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <h2 className={`title-font font-bold sm:text-2xl text-2xl text-black `}>
                <CountUp start={0} end={1_000_000} duration={3} separator="," />
              </h2>
              <p className="leading-relaxed font-bold text-black">Market Investment</p>
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <h2 className={`title-font font-bold sm:text-2xl text-2xl text-black `}>
                <CountUp start={0} end={120} duration={3} suffix="%" />
              </h2>
              <p className="leading-relaxed font-bold text-black">Max Market Return</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statics;
