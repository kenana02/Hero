import heroImage from "../assets/download.jpeg";

const HeroSection = () => {
  return (
    <section className="font-sans bg-white px-12 py-12 lg:px-16 lg:py-20  shadow-lg flex flex-col lg:flex-row items-center gap-10">
     
      <div className="flex-1 text-center lg:text-left ">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
        UNLOCK YOUR CREATIVE{" "}
        <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
    FLOW
  </span>
</h1>
        <p className="text-lg lg:text-xl text-slate-600 mt-4 mb-8">
          Simplify your projects, collaborate effortlessly, and bring ideas to life with our intuitive platform.

        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
           Get Started 
          </button>
          <button className="border border-indigo-500 text-indigo-500 px-6 py-3 rounded-xl hover:bg-indigo-50 transition">
           Watch Demo
          </button>
        </div>
      </div>

  
      <div className="flex-1">
<img
  src={heroImage}
  alt="Airline Hero"
  className="w-full h-auto max-w-md mx-auto shadow-lg rounded-xl  "
/>
      </div>
    </section>

  
  );
  
};

export default HeroSection;