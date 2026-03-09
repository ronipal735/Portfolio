const Navbar = () => {
  return (
    <nav className="bg-white/20 backdrop-blur-xs h-16 flex items-center shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto w-full px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold"></h1>

        <div className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#home" className="hover:text-red-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-red-600 transition">
            About
          </a>
          <a href="#skills" className="hover:text-red-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-red-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-red-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
