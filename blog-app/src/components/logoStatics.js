import React from 'react'

function LogoStatics() {
  return (
    <section class="text-gray-600 body-font h-auto bg-white py-4">
    <div class="container px-5 mx-auto">
      <div class="flex flex-wrap justify-center items-center md-flex-col">
        {/* <!-- Unsplash Logo --> */}
        <div class="p-2 w-1/5">
          <img
            src="/grammerly.png"
            alt="Grammarly Logo"
            class="mx-auto w-auto"
          />
        </div>
        {/* <!-- Medium Logo --> */}
        <div class="p-2 w-1/5">
          <img
            src="/unsplash.png"
            alt="Unsplash Logo"
            class="mx-auto w-auto"
          />
        </div>
        {/* <!-- Blogger Logo --> */}
        <div class="p-2 w-1/5">
          <img
            src="/wordpress.png"
            alt="WordPress Logo"
            class="mx-auto w-auto"
          />
        </div>
        {/* <!-- Grammarly Logo --> */}
        <div class="p-2 w-1/5">
          <img
            src="/medium.png"
            alt="Medium Logo"
            class="mx-auto w-auto"
          />
        </div>
        {/* <!-- WordPress Logo --> */}
        <div class="p-2 w-1/5">
          <img
            src="/blogger.png"
            alt="Blogger Logo"
            class="mx-auto w-auto"
          />
        </div>
      </div>
    </div>
  </section>
  
  

  )
}

export default LogoStatics
