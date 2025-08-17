import React from 'react';
import { Brain, FlaskRound as Flask, Microscope, Users, Code, Globe, Zap, Cpu, Network, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-space-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-command-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-science-400/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <Zap className="h-20 w-20 text-primary-400 animate-pulse-slow group-hover:text-command-400 transition-all duration-300" />
                <div className="absolute inset-0 bg-primary-400/30 rounded-full blur-2xl animate-glow group-hover:bg-command-400/30 transition-all duration-300"></div>
                <div className="absolute -inset-4 border border-primary-400/30 rounded-full animate-pulse-slow"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-primary-400 via-command-400 to-science-400 bg-clip-text text-transparent">
              About StableOmega
            </h1>
            <h2 className="text-xl md:text-2xl font-exo font-light mb-6 text-primary-100">
              Technology Beyond Boundaries
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto font-rajdhani">
              Founded with a visionary mission to develop AI models that push the boundaries of science and unlock knowledge beyond human reach.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-space-800/40 p-8 rounded-xl border border-primary-400/30 backdrop-blur-sm hover:border-primary-400/60 transition-all duration-300">
              <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-to-r from-primary-400 to-command-400 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-lg text-primary-100 mb-4 font-exo leading-relaxed">
                STOPL (StableOmega Technology Pvt. Ltd.) was founded with a visionary mission: to develop AI models that push the boundaries of science and unlock knowledge beyond human reach.
              </p>
              <p className="text-lg text-primary-100 font-exo leading-relaxed">
                Our focus is on creating self evolving AI systems that can evolve, driven by curiosity, to understand the universe's complexities. We specialize in models that can rapidly assimilate and analyze diverse datasets, enabling real-time simulation and decision-making.
              </p>
            </div>
            <div className="relative group">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border border-science-400/30 hover:border-science-400/60 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
                  alt="Data visualization"
                  className="object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-command-400/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-science-400/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-space-800/40 p-8 rounded-xl border border-primary-400/30 backdrop-blur-sm hover:border-primary-400/60 transition-all duration-300 hover:shadow-neon group">
              <div className="mb-6 group-hover:animate-float">
                <Brain className="h-12 w-12 text-primary-400" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">Complete Solutions</h3>
              <p className="text-primary-100 font-exo leading-relaxed">
                We provide end-to-end secure application development solutions, from initial design and development to deployment and maintenance, ensuring seamless integration and optimal performance.
              </p>
            </div>
            <div className="bg-space-800/40 p-8 rounded-xl border border-command-400/30 backdrop-blur-sm hover:border-command-400/60 transition-all duration-300 hover:shadow-neon-command group">
              <div className="mb-6 group-hover:animate-float">
                <Code className="h-12 w-12 text-command-400" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">Core Technologies</h3>
              <p className="text-primary-100 font-exo leading-relaxed">
                Our expertise spans AI model, image processing, and RI, creating edge AI model development innovative solutions tailored to project's unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-space-800/40 p-8 rounded-xl border border-science-400/30 backdrop-blur-sm hover:border-science-400/60 transition-all duration-300 hover:shadow-neon-science group">
              <div className="mb-6 group-hover:animate-float">
                <Globe className="h-12 w-12 text-science-400" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">Vision</h3>
              <p className="text-primary-100 font-exo leading-relaxed">
                To develop AI models driven not just by data, but capable of creating and validating hypotheses through simulation, becoming the global standard for hypothesis-driven, scientifically validated AI.
              </p>
            </div>
            <div className="bg-space-800/40 p-8 rounded-xl border border-command-400/30 backdrop-blur-sm hover:border-command-400/60 transition-all duration-300 hover:shadow-neon-command group">
              <div className="mb-6 group-hover:animate-float">
                <Microscope className="h-12 w-12 text-command-400" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">Mission</h3>
              <p className="text-primary-100 font-exo leading-relaxed">
                To create trustworthy AI for scientific discovery & anomaly detection and push the boundaries of science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-command-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-primary-400 to-command-400 bg-clip-text text-transparent">
            Leadership
          </h2>
          <div className="bg-space-800/40 p-8 rounded-xl border border-primary-400/30 backdrop-blur-sm hover:border-primary-400/60 transition-all duration-300 mb-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Target className="h-16 w-16 text-primary-400 animate-pulse-slow" />
                  <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold mb-2 text-white">Bhasker - Founder</h3>
                <p className="text-primary-100 mb-4 font-exo leading-relaxed">
                  A visionary leader with a passion for enhancing AI capabilities & QITHMA Architect through the symbiotic relationship of hardware (quantum + classical) and AI models.
                </p>
                <ul className="list-disc list-inside text-primary-100 space-y-2 font-rajdhani">
                  <li>10+ years of continuous work in the AI field</li>
                  <li>Expertise in CNN & Evolution algorithm for advanced anomaly detection & model evolution</li>
                  <li>Experience as an application developer for various GOVT departments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-command-400 to-science-400 bg-clip-text text-transparent">
            Core Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-command-400" />,
                name: "Deepak Gupta",
                description: "20+ years in application development, kernel developer; experienced in AI model development.",
                color: "command"
              },
              {
                icon: <Brain className="h-12 w-12 text-science-400" />,
                name: "Rahul Pandey",
                description: "Specialist in data science and API integration; created NLP chatbot using Spacy and speech recognition.",
                color: "science"
              },
              {
                icon: <Network className="h-12 w-12 text-primary-400" />,
                name: "Dinkar Singh",
                description: "10+ years in Linux and network administration; managed Linux servers.",
                color: "primary"
              }
            ].map((member, index) => (
              <div key={index} className={`bg-space-800/40 p-8 rounded-xl border border-${member.color}-400/30 backdrop-blur-sm hover:border-${member.color}-400/60 transition-all duration-300 hover:shadow-neon-${member.color} group`}>
                <div className="mb-6 group-hover:animate-float">{member.icon}</div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-white">{member.name}</h3>
                <p className="text-primary-100 font-exo leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-command-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-gradient-to-br from-primary-900/50 to-command-900/50 p-12 rounded-2xl border border-primary-400/30 backdrop-blur-sm">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Zap className="h-16 w-16 text-primary-400 animate-pulse-slow" />
                <div className="absolute inset-0 bg-primary-400/30 rounded-full blur-2xl animate-glow"></div>
              </div>
            </div>
            
            <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-to-r from-primary-400 to-command-400 bg-clip-text text-transparent">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl mb-8 text-primary-100 font-exo">
              Partner with us to bring next-generation AI solutions to your organization
            </p>
            <a
              href="mailto:omega.bhasker@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-command-600 text-lg font-rajdhani font-bold rounded-lg text-white hover:from-command-500 hover:to-science-500 transition-all duration-300 transform hover:scale-105 shadow-neon hover:shadow-neon-command border border-primary-400/50 hover:border-command-400"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;