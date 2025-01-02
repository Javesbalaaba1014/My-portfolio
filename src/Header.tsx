function Header() {
  return (
    <nav className="fixed w-full bg-transparent shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <div className="flex items-center">
            <img src="jb.png" className="h-8 w-auto rounded-full" alt="Javes Balaba Logo" />
            <span className="ml-3 text-xl font-bold text-white">Javes Balaba</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </a>
            <a href="/projects" className="text-white/80 hover:text-white transition-colors">
              Projects
            </a>
            <a href="/about" className="text-white/80 hover:text-white transition-colors">
              About Me
            </a>
            <a href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white/80 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
