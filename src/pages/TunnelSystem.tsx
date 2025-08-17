import React from 'react';
import { Mountain, Ruler, AlertTriangle, Eye, Zap, Cpu, Target, Map } from 'lucide-react';

const TunnelSystem = () => {
  return (
    <div className="bg-space-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-engineering-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-command-400/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Engineering grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <Mountain className="h-20 w-20 text-engineering-400 animate-pulse-slow group-hover:text-command-400 transition-all duration-300" />
                <div className="absolute inset-0 bg-engineering-400/30 rounded-full blur-2xl animate-glow group-hover:bg-command-400/30 transition-all duration-300"></div>
                <div className="absolute -inset-4 border border-engineering-400/30 rounded-full animate-pulse-slow"></div>
                <div className="absolute -inset-8 border border-engineering-400/20 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-to-r from-engineering-400 via-command-400 to-science-400 bg-clip-text text-transparent">
              AI-Powered Tunnel Alignment
            </h1>
            <h2 className="text-xl md:text-2xl font-exo font-light mb-6 text-primary-100">
              Advanced Infrastructure Planning System
            </h2>
            <p className="text-xl text-engineering-200 font-rajdhani">
              Precision Meets Intelligence in Infrastructure Planning
            </p>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-to-r from-engineering-400 to-command-400 bg-clip-text text-transparent">
              Revolutionary Infrastructure Technology
            </h2>
            <div className="max-w-5xl mx-auto bg-space-800/40 p-8 rounded-xl border border-engineering-400/30 backdrop-blur-sm hover:border-engineering-400/60 transition-all duration-300">
              <p className="text-lg text-primary-100 font-exo leading-relaxed">
                Our cutting-edge AI-based Digital Elevation Model (DEM) application revolutionizes tunnel alignment, planning, and optimization. Designed for complex infrastructure projects, our platform empowers engineers, planners, and decision-makers to achieve faster, safer, and more cost-effective outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-gradient-to-br from-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-engineering-400/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-command-400/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-space-800/40 p-8 rounded-xl border border-engineering-400/30 backdrop-blur-sm hover:border-engineering-400/60 transition-all duration-300 hover:shadow-neon-engineering group">
              <div className="mb-6 group-hover:animate-float">
                <Mountain className="h-12 w-12 text-engineering-400" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">High-Resolution DEM Generation</h3>
              <p className="text-primary-100 font-exo leading-relaxed">
                Produces ultra-precise 0.5m spatial resolution elevation models using LiDAR, satellite imagery, UAVs, and ground surveys.
              </p>
            </div>
            
            <div className="bg-space-800/40 p-8 rounded-xl border border-command-400/30 backdrop-blur-sm hover:border-command-400/60 transition-all duration-300 hover:shadow-neon-command group">
              <div className="mb-6 group-hover:animate-float">
                <Ruler className="h-12 w-12 text-command-400" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">AI-Driven Alignment Optimization</h3>
              <p className="text-primary-100 font-exo leading-relaxed">
                Advanced algorithms generate optimal tunnel paths considering cost, terrain, geological risk, and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(239,68,68,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(239,68,68,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-command-400 to-science-400 bg-clip-text text-transparent">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertTriangle className="h-12 w-12 text-engineering-400" />,
                title: "Smart Hazard Analysis",
                description: "Integrated geotechnical analysis tools assess geological hazards and seismic risks in real time.",
                color: "engineering",
                gradient: "from-engineering-600/20 to-command-600/20"
              },
              {
                icon: <Eye className="h-12 w-12 text-command-400" />,
                title: "Interactive 3D Visualization",
                description: "Immersive user interface with real-time simulation and cross-sectional views.",
                color: "command",
                gradient: "from-command-600/20 to-science-600/20"
              },
              {
                icon: <Mountain className="h-12 w-12 text-science-400" />,
                title: "End-to-End Integration",
                description: "Seamlessly connects with industry-standard GIS, CAD, and BIM tools.",
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

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-br from-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-command-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-engineering-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-engineering-400 to-command-400 bg-clip-text text-transparent">
            Performance Metrics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Cpu className="h-8 w-8 text-engineering-400" />,
                metric: "1B+",
                label: "Point cloud data points handled",
                color: "engineering"
              },
              {
                icon: <Zap className="h-8 w-8 text-command-400" />,
                metric: "< 2 hours",
                label: "Alignment optimization time",
                color: "command"
              },
              {
                icon: <Target className="h-8 w-8 text-science-400" />,
                metric: "90%+",
                label: "Hazard analysis accuracy",
                color: "science"
              },
              {
                icon: <Map className="h-8 w-8 text-primary-400" />,
                metric: "Real-time",
                label: "Collaboration capabilities",
                color: "primary"
              }
            ].map((metric, index) => (
              <div key={index} className={`bg-space-800/40 p-6 rounded-xl border border-${metric.color}-400/30 backdrop-blur-sm hover:border-${metric.color}-400/60 transition-all duration-300 hover:shadow-neon-${metric.color} group text-center`}>
                <div className="flex justify-center mb-4">
                  <div className="group-hover:animate-float">{metric.icon}</div>
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-2 text-white">{metric.metric}</h3>
                <p className="text-primary-200 font-rajdhani">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-engineering-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-command-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-gradient-to-br from-engineering-900/50 to-command-900/50 p-12 rounded-2xl border border-engineering-400/30 backdrop-blur-sm">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Mountain className="h-16 w-16 text-engineering-400 animate-pulse-slow" />
                <div className="absolute inset-0 bg-engineering-400/30 rounded-full blur-2xl animate-glow"></div>
              </div>
            </div>
            
            <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-to-r from-engineering-400 to-command-400 bg-clip-text text-transparent">
              Want to Learn More?
            </h2>
            <p className="text-xl mb-8 text-primary-100 font-exo">
              Get in touch to explore a demo or see how our solution can help your next project succeed.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="mailto:omega.bhasker@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-engineering-600 to-command-600 text-lg font-rajdhani font-bold rounded-lg text-white hover:from-command-500 hover:to-science-500 transition-all duration-300 transform hover:scale-105 shadow-neon-engineering hover:shadow-neon-command border border-engineering-400/50 hover:border-command-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TunnelSystem;