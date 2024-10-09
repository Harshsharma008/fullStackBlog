// import React from 'react'

// function Blog() {
//   return (
//       <div><section class="text-gray-600 bg-black body-font">
//           <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//               <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                   <h1 class="title-font sm:text-5xl text-5xl mb-4  text-white font-bold">Blogs
                      
//                   </h1>
//                   <div class="flex justify-center">
//                   <p class="mb-8 w-50% text-white">Welcome to a world of limitless possibilities, where the journey is as
//                     <br/> exhilarating as the destination, and where every moment is an 
//                     <br/>opportunity to make your mark on the canvas of existence.
//                     <br/> The only limit is the extent of your imagination.</p>
//                     </div>
//               </div>
              
//           </div>
//       </section></div>
//   )
// }

// export default Blog

"use client"
import React, { useState, useEffect } from 'react';

function Blog() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500); // Delay the animation start by 500ms
  }, []);

  return (
    <div>
      <section className="text-gray-600 bg-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className={`title-font sm:text-5xl text-5xl mb-4 text-white font-bold transition duration-700 ease-in-out ${
                startAnimation ? 'transform scale-105 opacity-100' : 'opacity-0'
              }`}
            >
              Blogs
            </h1>
            <div className="flex justify-center">
              <p
                className={`mb-8 w-50% text-white whitespace-pre-line transition duration-1000 ease-in-out ${
                  startAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
               {`Welcome to a world of limitless possibilities, where the journey is as
                exhilarating as the destination, and where every moment is an
                opportunity to make your mark on the canvas of existence.
                The only limit is the extent of your imagination.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
