import React from 'react';
import { Camera, Eye, BarChart3, Map, Satellite, Radar, Zap, Target } from 'lucide-react';

const SAR = () => {
  return (
    <div className="bg-space-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-science-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-command-400/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Radar sweep overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <Satellite className="h-20 w-20 text-science-400 animate-pulse-slow group-hover:text-primary-400 transition-all duration-300" />
                <div className="absolute inset-0 bg-science-400/30 rounded-full blur-2xl animate-glow group-hover:bg-primary-400/30 transition-all duration-300"></div>
                <div className="absolute -inset-4 border border-science-400/30 rounded-full animate-pulse-slow"></div>
                <div className="absolute -inset-8 border border-science-400/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-to-r from-science-400 via-primary-400 to-command-400 bg-clip-text text-transparent">
              SAR & EO Imagery Fusion
            </h1>
            <h2 className="text-xl md:text-2xl font-exo font-light mb-6 text-primary-100">
              Metadata Exploitation System
            </h2>
            <p className="text-xl text-science-200 font-rajdhani">
              Unlock Precision Intelligence — Anytime, Anywhere
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-to-r from-primary-400 to-science-400 bg-clip-text text-transparent">
              Why This Matters
            </h2>
            <div className="max-w-5xl mx-auto bg-space-800/40 p-8 rounded-xl border border-science-400/30 backdrop-blur-sm hover:border-science-400/60 transition-all duration-300">
              <p className="text-lg text-primary-100 font-exo leading-relaxed">
                Electro-optical (EO) imagery is invaluable in daylight and clear weather conditions, but it falters during inclement weather or at night. SAR, on the other hand, thrives in those exact conditions but is notoriously difficult to interpret. Our system bridges that gap by fusing both image types, enabling consistent, clear, and enhanced imagery — regardless of environmental constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-gradient-to-br from-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-science-400/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary-400/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-space-800/40 p-8 rounded-xl border border-science-400/30 backdrop-blur-sm hover:border-science-400/60 transition-all duration-300 hover:shadow-neon-science group">
              <div className="mb-6 group-hover:animate-float">
                <Camera className="h-12 w-12 text-science-400" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">Intelligent SAR & EO Fusion</h3>
              <p className="text-primary-100 font-exo leading-relaxed">
                Combines the strengths of SAR and EO to produce imagery that is easier to read, analyze, and act upon.
              </p>
            </div>
            
            <div className="bg-space-800/40 p-8 rounded-xl border border-primary-400/30 backdrop-blur-sm hover:border-primary-400/60 transition-all duration-300 hover:shadow-neon group">
              <div className="mb-6 group-hover:animate-float">
                <Eye className="h-12 w-12 text-primary-400" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">Metadata-Driven Material Analysis</h3>
              <p className="text-primary-100 font-exo leading-relaxed">
                Utilizes underused SAR metadata to derive insights into material composition — without requiring deep physics or SAR domain expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-command-400 to-science-400 bg-clip-text text-transparent">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Map className="h-12 w-12 text-command-400" />,
                title: "User-Defined Reference Layers",
                description: "Analysts can mark static features such as terrain and infrastructure to anchor and enhance fused images.",
                color: "command",
                gradient: "from-command-600/20 to-science-600/20"
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-science-400" />,
                title: "Automated Change Detection",
                description: "Integrated algorithms highlight variations in terrain or structures, improving situational awareness.",
                color: "science",
                gradient: "from-science-600/20 to-primary-600/20"
              }
            ].map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-xl border border-${feature.color}-400/30 backdrop-blur-sm hover:border-${feature.color}-400/60 transition-all duration-300 hover:shadow-neon-${feature.color} group hover:transform hover:scale-105`}>
                <div className="mb-6 group-hover:animate-float">{feature.icon}</div>
                <h3 className="text-xl font-orbitron font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-primary-100 font-exo leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-command-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-science-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-science-400 to-command-400 bg-clip-text text-transparent">
            Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-8 w-8 text-white" />,
                title: "Defense & Reconnaissance",
                description: "Operations and strategic planning",
                gradient: "from-engineering-600 to-command-600"
              },
              {
                icon: <Zap className="h-8 w-8 text-white" />,
                title: "Disaster Response",
                description: "Damage assessment and planning",
                gradient: "from-command-600 to-science-600"
              },
              {
                icon: <Radar className="h-8 w-8 text-white" />,
                title: "Infrastructure Monitoring",
                description: "Environmental tracking",
                gradient: "from-science-600 to-primary-600"
              },
              {
                icon: <Eye className="h-8 w-8 text-white" />,
                title: "Night-time Surveillance",
                description: "All-weather operations",
                gradient: "from-primary-600 to-engineering-600"
              }
            ].map((useCase, index) => (
              <div key={index} className={`bg-gradient-to-br ${useCase.gradient} p-6 rounded-xl text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-neon group hover:transform hover:scale-105`}>
                <div className="flex justify-center mb-4">
                  <div className="group-hover:animate-float">{useCase.icon}</div>
                </div>
                <h3 className="font-orbitron font-semibold mb-2 text-center">{useCase.title}</h3>
                <p className="text-white/90 font-rajdhani text-center text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-science-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-gradient-to-br from-science-900/50 to-primary-900/50 p-12 rounded-2xl border border-science-400/30 backdrop-blur-sm">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Satellite className="h-16 w-16 text-science-400 animate-pulse-slow" />
                <div className="absolute inset-0 bg-science-400/30 rounded-full blur-2xl animate-glow"></div>
              </div>
            </div>
            
            <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-to-r from-science-400 to-primary-400 bg-clip-text text-transparent">
              Ready to Enhance Your Intelligence Capabilities?
            </h2>
            <p className="text-xl mb-8 text-primary-100 font-exo">
              Contact us today to explore how our SAR & EO fusion system can revolutionize your imaging operations.
            </p>
            <a
              href="mailto:omega.bhasker@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-science-600 to-primary-600 text-lg font-rajdhani font-bold rounded-lg text-white hover:from-command-500 hover:to-engineering-500 transition-all duration-300 transform hover:scale-105 shadow-neon-science hover:shadow-neon-command border border-science-400/50 hover:border-command-400"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAR;