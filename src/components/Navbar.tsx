import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-space-900/95 backdrop-blur-md shadow-2xl border-b border-primary-500/30 relative">
      {/* Animated scan line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-scan"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <Zap className="h-10 w-10 text-primary-400 group-hover:text-command-400 transition-all duration-300 animate-pulse-slow" />
                <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl group-hover:bg-command-400/20 transition-all duration-300"></div>
              </div>
              <span className="ml-3 font-orbitron font-bold text-2xl bg-gradient-to-r from-primary-400 to-command-400 bg-clip-text text-transparent group-hover:from-command-400 group-hover:to-primary-400 transition-all duration-300">
                StableOmega
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="text-primary-200 hover:text-command-400 px-3 py-2 rounded-md text-sm font-rajdhani font-medium transition-all duration-300 hover:shadow-neon-command hover:bg-command-400/10 border border-transparent hover:border-command-400/30">
                Home
              </Link>
              <Link to="/about" className="text-primary-200 hover:text-command-400 px-3 py-2 rounded-md text-sm font-rajdhani font-medium transition-all duration-300 hover:shadow-neon-command hover:bg-command-400/10 border border-transparent hover:border-command-400/30">
                About
              </Link>
              <Link to="/sar" className="text-primary-200 hover:text-science-400 px-3 py-2 rounded-md text-sm font-rajdhani font-medium transition-all duration-300 hover:shadow-neon-science hover:bg-science-400/10 border border-transparent hover:border-science-400/30">
                SAR
              </Link>
              <Link to="/tunnel-system" className="text-primary-200 hover:text-science-400 px-3 py-2 rounded-md text-sm font-rajdhani font-medium transition-all duration-300 hover:shadow-neon-science hover:bg-science-400/10 border border-transparent hover:border-science-400/30">
                Tunnel System
              </Link>
              <Link to="/careers" className="text-primary-200 hover:text-command-400 px-3 py-2 rounded-md text-sm font-rajdhani font-medium transition-all duration-300 hover:shadow-neon-command hover:bg-command-400/10 border border-transparent hover:border-command-400/30">
                Careers
              </Link>
              <Link to="/contact" className="bg-gradient-to-r from-primary-600 to-science-600 text-white hover:from-command-500 hover:to-engineering-500 px-6 py-2 rounded-lg text-sm font-rajdhani font-medium transition-all duration-300 shadow-neon hover:shadow-neon-command transform hover:scale-105 border border-primary-400/50 hover:border-command-400">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-200 hover:text-command-400 focus:outline-none transition-all duration-300 hover:bg-command-400/10 border border-transparent hover:border-command-400/30"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-space-800/95 backdrop-blur-md border-t border-primary-500/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-primary-200 hover:text-command-400 block px-3 py-2 rounded-md text-base font-rajdhani font-medium transition-all duration-300 hover:bg-command-400/10 border border-transparent hover:border-command-400/30" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-primary-200 hover:text-command-400 block px-3 py-2 rounded-md text-base font-rajdhani font-medium transition-all duration-300 hover:bg-command-400/10 border border-transparent hover:border-command-400/30" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/sar" className="text-primary-200 hover:text-science-400 block px-3 py-2 rounded-md text-base font-rajdhani font-medium transition-all duration-300 hover:bg-science-400/10 border border-transparent hover:border-science-400/30" onClick={toggleMenu}>
              SAR
            </Link>
            <Link to="/tunnel-system" className="text-primary-200 hover:text-science-400 block px-3 py-2 rounded-md text-base font-rajdhani font-medium transition-all duration-300 hover:bg-science-400/10 border border-transparent hover:border-science-400/30" onClick={toggleMenu}>
              Tunnel System
            </Link>
            <Link to="/careers" className="text-primary-200 hover:text-command-400 block px-3 py-2 rounded-md text-base font-rajdhani font-medium transition-all duration-300 hover:bg-command-400/10 border border-transparent hover:border-command-400/30" onClick={toggleMenu}>
              Careers
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-primary-600 to-science-600 text-white hover:from-command-500 hover:to-engineering-500 block px-3 py-2 rounded-md text-base font-rajdhani font-medium transition-all duration-300 shadow-neon border border-primary-400/50" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;