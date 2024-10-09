function Hero() {
  return (
    <main className="bg-sky-200 text-gray-600 pt-5 h-auto">
      <div className="container mx-auto flex px-5 py-12 lg:py-24 flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 lg:mb-0 items-center text-center">
          <h1 className="title-font text-5xl sm:text-6xl lg:text-[80px] tracking-wide mb-4 font-semibold text-gray-900 animate-fade-in">
            Hey there
            <br className="hidden lg:inline-block" /> I'm Shubham
          </h1>
          <p className="mb-8 leading-relaxed animate-slide-in text-base sm:text-lg md:text-xl lg:text-2xl">
            Dynamically underwhelm integrated outsourcing via timely models.
            <br /> Rapidiously reconceptualize visionary imperatives without
            24/365 catalysts for change.
            <br /> Completely streamline functionalized models and
            out-of-the-box functionalities.
            <br /> Compellingly brand emerging sources and compelling materials.
            Globally iterate parallel content.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/blogs">
              <button className="inline-flex items-center bg-blue-600 text-white font-bold border-0 rounded-full py-2 px-6 focus:outline-none hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out shadow-lg">
                Blogs
              </button>
            </a>
            <a href="/products">
              <button className="inline-flex items-center bg-blue-600 text-white font-bold border-0 rounded-full py-2 px-6 focus:outline-none hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out shadow-lg">
                Products
              </button>
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="sm:w-64 md:w-72 lg:w-80 h-[300px] sm:h-[400px] md:h-[450px] bg-blue-600 overflow-hidden  rounded-t-full flex items-center justify-center transform hover:scale-110 transition duration-500 ease-in-out shadow-2xl animate-image-slide-in  bottom-0 mb-0">
            <img
              src="/image.png"
              width={300}   
              height={300}
              alt="Picture of the author"
              className=" shadow-xl pl-2 "
            />
          </div>
      </div>
    </main>
  );
}

export default Hero;
