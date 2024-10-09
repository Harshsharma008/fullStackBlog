import React from 'react'

function Hero() {
  return (
    <div>
        <section class="text-gray-600 body-font bg-blue-200">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded " alt="hero" src="/image.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Section Title
        
      </h1>
      <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit massa consectetur in molestie augue sed sed augue nibh et quis nibh faucibus sem non cursus lectus nibh volutpat aliquam sed est nibh adipiscing hendrerit rhoncus, sed dolor tortor pellentesque quis molestie volutpat volutpat euismod sit non sit sed.</p>
      <div class="flex justify-center gap-5">
      <button className="inline-flex items-center bg-blue-600 text-white font-bold border-0 rounded-full py-2 px-6 focus:outline-none hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out shadow-lg">
                Products
              </button>
              <button className="inline-flex items-center bg-blue-600 text-white font-bold border-0 rounded-full py-2 px-6 focus:outline-none hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out shadow-lg">
                Blogs
              </button></div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero