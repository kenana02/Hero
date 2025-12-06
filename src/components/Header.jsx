const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-200 to-indigo-400 shadow-2xl border-b border-gray-200 px-14 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
       
        <div className="text-2xl font-bold text-indigo-600 mb-4 md:mb-0">
          AirFlow 
        </div>
        <nav className="flex flex-col md:flex-row gap-6 text-white font-medium">
          <a href="#home" className="hover:text-indigo-600  transition">Home</a>
          <a href="#destination" className="hover:text-indigo-600  transition">Destination</a>
          <a href="#services" className="hover:text-indigo-600  transition">Services</a>
          <a href="#contact" className="hover:text-indigo-600  transition">Contact</a>
        </nav>


        <button className="bg-slate-300 text-gray-700 px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;