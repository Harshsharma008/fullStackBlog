function About() {
    return (
      <main className="bg-sky-200 text-gray-600 pt-5 h-auto">
        <div className="container mx-auto flex px-5 py-12 lg:py-24 flex-col-reverse lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 lg:mb-0 items-center text-center">
            <h1 className="title-font text-xl sm:text-6xl lg:text-md tracking-wide mb-4 font-semibold text-gray-900 animate-fade-in">
              <span className="text-white bg-blue-600 font-bold">About</span> the author
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
                  Know More
                </button>
              </a>
            
            </div>
          </div>
  
          {/* Image Content */}
          <div class="relative bg-sky-300 w-64 h-32 rounded-lg shadow overflow-hidden animate-fade-in">
        <span class="w-full h-full flex justify-center items-center text-sm font-black">
        Now, this looks like a Dopamine,
So everybody, just follow me,
we need Here a little controversy,
it feels so empty without me.
            </span> 
    </div>

        </div>
      </main>
    );
  }
  
  export default About;
  