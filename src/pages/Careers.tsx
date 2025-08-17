import React from 'react';
import { Briefcase, GraduationCap, Code, Database, Brain, MessageSquare, Zap, Cpu, Network, Target } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: 'AI Research Scientist',
      icon: <Brain className="w-8 h-8" />,
      requirements: [
        'PhD/Masters in CS/AI',
        'Expertise in Transformers, Attention, CNNs, RNNs',
        'Deep knowledge of Multimodal Learning',
        'Expertise in Reinforcement Learning',
        'Strong Python & ML framework skills (PyTorch/JAX)'
      ],
      color: 'science'
    },
    {
      title: 'GPU Optimization Engineer',
      icon: <Cpu className="w-8 h-8" />,
      requirements: [
        'Strong C++/CUDA/Triton/SYCL programming skills',
        'Deep understanding of GPU architectures',
        'Experience with performance profiling tools',
        'Expertise in kernel optimization',
        'Parallel programming paradigms'
      ],
      color: 'engineering'
    },
    {
      title: 'Data Engineer / KG Specialist',
      icon: <Database className="w-8 h-8" />,
      requirements: [
        'Experience with Big Data frameworks',
        'Proficiency in Graph Databases & SPARQL',
        'Strong Python scripting skills',
        'Experience with diverse data formats',
        'NLP for Information Extraction'
      ],
      color: 'primary'
    },
    {
      title: 'Software Engineer - Backend/MLOps',
      icon: <Code className="w-8 h-8" />,
      requirements: [
        'Strong backend development skills',
        'Experience building scalable APIs',
        'Cloud infrastructure management',
        'MLOps platforms & practices',
        'CI/CD pipelines'
      ],
      color: 'command'
    },
    {
      title: 'Software Engineer - Interaction/Dialogue',
      icon: <MessageSquare className="w-8 h-8" />,
      requirements: [
        'Experience with NLP libraries & techniques',
        'Conversational AI frameworks',
        'API design for interactive systems',
        'Basic frontend skills'
      ],
      color: 'science'
    }
  ];

  return (
    <div className="bg-space-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-command-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-science-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary-400/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <Briefcase className="h-20 w-20 text-command-400 animate-pulse-slow group-hover:text-science-400 transition-all duration-300" />
                <div className="absolute inset-0 bg-command-400/30 rounded-full blur-2xl animate-glow group-hover:bg-science-400/30 transition-all duration-300"></div>
                <div className="absolute -inset-4 border border-command-400/30 rounded-full animate-pulse-slow"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-command-400 via-science-400 to-primary-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-command-200 font-rajdhani">
              Help us shape the future of AI and scientific discovery
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us & Benefits */}
      <section className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-space-800/40 p-8 rounded-xl border border-command-400/30 backdrop-blur-sm hover:border-command-400/60 transition-all duration-300 hover:shadow-neon-command group">
              <div className="mb-6 group-hover:animate-float">
                <GraduationCap className="w-12 h-12 text-command-400" />
              </div>
              <h2 className="text-2xl font-orbitron font-bold mb-4 text-white">Why Join Us?</h2>
              <ul className="space-y-3 text-primary-100 font-exo">
                <li className="flex items-center"><Target className="w-4 h-4 text-command-400 mr-2" />Work on cutting-edge AI technology</li>
                <li className="flex items-center"><Network className="w-4 h-4 text-command-400 mr-2" />Collaborative and innovative environment</li>
                <li className="flex items-center"><Zap className="w-4 h-4 text-command-400 mr-2" />Competitive compensation package</li>
                <li className="flex items-center"><Brain className="w-4 h-4 text-command-400 mr-2" />Professional development opportunities</li>
                <li className="flex items-center"><Code className="w-4 h-4 text-command-400 mr-2" />Global impact through scientific advancement</li>
              </ul>
            </div>
            <div className="bg-space-800/40 p-8 rounded-xl border border-science-400/30 backdrop-blur-sm hover:border-science-400/60 transition-all duration-300 hover:shadow-neon-science group">
              <div className="mb-6 group-hover:animate-float">
                <Briefcase className="w-12 h-12 text-science-400" />
              </div>
              <h2 className="text-2xl font-orbitron font-bold mb-4 text-white">Benefits</h2>
              <ul className="space-y-3 text-primary-100 font-exo">
                <li className="flex items-center"><Cpu className="w-4 h-4 text-science-400 mr-2" />Flexible work arrangements</li>
                <li className="flex items-center"><Database className="w-4 h-4 text-science-400 mr-2" />Health insurance coverage</li>
                <li className="flex items-center"><MessageSquare className="w-4 h-4 text-science-400 mr-2" />Learning and development budget</li>
                <li className="flex items-center"><Network className="w-4 h-4 text-science-400 mr-2" />Regular team events and activities</li>
                <li className="flex items-center"><Target className="w-4 h-4 text-science-400 mr-2" />Stock options for eligible positions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-command-400/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-science-400/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center bg-gradient-to-r from-command-400 to-science-400 bg-clip-text text-transparent">
            Open Positions
          </h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className={`bg-space-800/40 p-8 rounded-xl border border-${position.color}-400/30 backdrop-blur-sm hover:border-${position.color}-400/60 transition-all duration-300 hover:shadow-neon-${position.color} group`}>
                <div className="flex items-center mb-6">
                  <div className={`text-${position.color}-400 mr-4 group-hover:animate-float`}>{position.icon}</div>
                  <h3 className="text-xl font-orbitron font-bold text-white">{position.title}</h3>
                </div>
                <div className="pl-12">
                  <h4 className="font-orbitron font-semibold mb-3 text-primary-200">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-primary-100 font-exo">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-command-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-science-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-gradient-to-br from-command-900/50 to-science-900/50 p-12 rounded-2xl border border-command-400/30 backdrop-blur-sm">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Briefcase className="h-16 w-16 text-command-400 animate-pulse-slow" />
                <div className="absolute inset-0 bg-command-400/30 rounded-full blur-2xl animate-glow"></div>
              </div>
            </div>
            
            <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-to-r from-command-400 to-science-400 bg-clip-text text-transparent">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 text-primary-100 font-exo">
              Send your resume and a brief introduction to join our innovative team
            </p>
            <a
              href="mailto:omega.bhasker@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-command-600 to-science-600 text-lg font-rajdhani font-bold rounded-lg text-white hover:from-science-500 hover:to-primary-500 transition-all duration-300 transform hover:scale-105 shadow-neon-command hover:shadow-neon-science border border-command-400/50 hover:border-science-400"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;