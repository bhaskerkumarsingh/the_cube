import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Cpu, Database, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-space-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-command-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-science-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Zap className="h-10 w-10 text-primary-400 group-hover:text-command-400 transition-all duration-300 animate-pulse-slow" />
                <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl group-hover:bg-command-400/20 transition-all duration-300"></div>
              </div>
              <span className="font-orbitron font-bold text-3xl bg-gradient-to-r from-primary-400 to-command-400 bg-clip-text text-transparent">
                StableOmega
              </span>
            </div>
            <p className="text-primary-100 mb-6 font-exo text-lg leading-relaxed">
              Pushing the boundaries of science with trustworthy AI solutions. We're committed to developing cutting-edge technology that drives innovation and delivers measurable results across the galaxy of possibilities.
            </p>
            
            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center space-x-2 bg-space-800/50 px-3 py-1 rounded-full border border-primary-400/30">
                <Cpu className="h-4 w-4 text-primary-400" />
                <span className="text-sm font-rajdhani text-primary-200">Quantum AI</span>
              </div>
              <div className="flex items-center space-x-2 bg-space-800/50 px-3 py-1 rounded-full border border-science-400/30">
                <Database className="h-4 w-4 text-science-400" />
                <span className="text-sm font-rajdhani text-science-200">Neural Networks</span>
              </div>
              <div className="flex items-center space-x-2 bg-space-800/50 px-3 py-1 rounded-full border border-command-400/30">
                <Shield className="h-4 w-4 text-command-400" />
                <span className="text-sm font-rajdhani text-command-200">Secure Systems</span>
              </div>
            </div>
          </div>

          <div className="bg-space-800/30 p-6 rounded-xl border border-primary-400/20 backdrop-blur-sm">
            <h3 className="text-xl font-orbitron font-bold mb-4 text-command-400">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sar" className="text-primary-100 hover:text-science-400 transition-all duration-300 font-rajdhani hover:translate-x-2 inline-block group">
                  <span className="border-b border-transparent group-hover:border-science-400">SAR & EO System</span>
                </Link>
              </li>
              <li>
                <Link to="/tunnel-system" className="text-primary-100 hover:text-science-400 transition-all duration-300 font-rajdhani hover:translate-x-2 inline-block group">
                  <span className="border-b border-transparent group-hover:border-science-400">Tunnel System</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-100 font-exo">
              © {new Date().getFullYear()} StableOmega Technology Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-primary-100 hover:text-command-400 transition-all duration-300 font-rajdhani hover:shadow-neon-command">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-100 hover:text-command-400 transition-all duration-300 font-rajdhani hover:shadow-neon-command">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;