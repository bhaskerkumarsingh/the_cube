import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Cpu, Clock, Globe2, CheckCircle2, Mail, Rocket, Zap, Brain, Target, Network, Eye, Database, Code, Mountain, Satellite } from 'lucide-react';

const Home = () => {
  const useCases = [
    {
      title: "SAR & EO Imagery Fusion and analytics",
      desc: "Advanced metadata exploitation system for all-weather intelligence operations with verified decision paths.",
      points: [
        "All-weather imaging capabilities with 97%+ accuracy",
        "Real-time fusion processing under 2 hours", 
        "Automated change detection with audit trails"
      ],
      icon: <Satellite className="w-6 h-6" />,
      color: "science"
    },
    {
      title: "AI-Powered Tunnel Alignment", 
      desc: "Revolutionary DEM-based infrastructure planning with geological hazard analysis and optimization.",
      points: [
        "0.5m spatial resolution elevation models",
        "AI-driven alignment optimization",
        "Real-time geological risk assessment"
      ],
      icon: <Mountain className="w-6 h-6" />,
      color: "engineering"
    },
    {
      title: "Drug Discovery & Precision Medicine",
      desc: "Rank candidates, surface mechanism‑of‑action hypotheses, and score trial eligibility with calibrated confidence.",
      points: [
        "Cycle time ↓ up to 70% via multi‑omic + literature synthesis",
        "Hit triage precision ↑; uncertainty‑aware reasoning",
        "Audit trail for regulatory dossiers (ICH/EU)"
      ],
      icon: <Brain className="w-6 h-6" />,
      color: "primary"
    },
    {
      title: "Defense Decision Intelligence",
      desc: "Composable COP (common operating picture) with explainable threat scoring and policy‑gated actions.",
      points: [
        "Sub‑second alerting; verified decision paths",
        "Multi‑sensor fusion (EO/IR/SAR/ELINT)",
        "Operator‑in‑the‑loop controls & red‑team logs"
      ],
      icon: <Target className="w-6 h-6" />,
      color: "command"
    },
    {
      title: "Autonomous Drones & Robotics",
      desc: "Perception‑planning‑control loop acceleration with safety interlocks and runtime confidence meters.",
      points: [
        "2–4× perception throughput; 150 ms E2E",
        "Fail‑safe behaviors when confidence dips",
        "On‑edge deployment for low‑latency missions"
      ],
      icon: <Eye className="w-6 h-6" />,
      color: "science"
    },
    {
      title: "Deep‑Tech Research: Materials & Beyond",
      desc: "Accelerate materials discovery (battery, semiconductor, composites) and complex simulation workflows.",
      points: [
        "Literature + simulation synthesis for candidates",
        "NDPS‑assisted code generation for simulators",
        "Traceable provenance for publishable results"
      ],
      icon: <Database className="w-6 h-6" />,
      color: "engineering"
    }
  ];

  return (
    <div className="bg-space-950 text-white min-h-screen">
      {/* HERO SECTION - Borg Cube Inspired */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-space-900 via-space-800 to-space-900" />
        
        {/* Borg Cube geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-400/10 rounded-none blur-3xl animate-float transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-command-400/10 rounded-none blur-2xl animate-float transform rotate-12" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-science-400/10 rounded-none blur-xl animate-float transform -rotate-12" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Borg-style grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
        
        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent animate-scan"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-command-400 to-transparent animate-scan" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-none bg-primary-400/20 px-4 py-2 text-sm backdrop-blur-sm border border-primary-400/30 font-orbitron">
                <ShieldCheck className="size-4 text-primary-400" />
                <span className="text-primary-100">VERIFIED INTELLIGENCE SYSTEM</span>
              </div>
              
              <h1 className="mt-6 text-4xl sm:text-6xl font-orbitron font-bold tracking-tight bg-gradient-to-r from-primary-400 via-command-400 to-science-400 bg-clip-text text-transparent">
                STABLEOMEGA CUBE
              </h1>
              <h2 className="text-2xl sm:text-3xl font-exo font-light mt-2 text-primary-100">
                Verifiable Intelligence for Regulated, Real‑World Decisions
              </h2>
              
              <p className="mt-6 text-lg text-primary-100/90 max-w-2xl font-rajdhani leading-relaxed">
                Built for safety‑critical operations where accuracy, traceability and speed are non‑negotiable. THE CUBE architecture blends quantum-algorithm enhanced reasoning with 
                hardware‑optimized inference to deliver concrete outcomes across defense, infrastructure, healthcare, robotics, finance and energy.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-none bg-gradient-to-r from-primary-600 to-command-600 px-6 py-4 text-white font-rajdhani font-bold shadow-neon hover:shadow-neon-command transition-all duration-300 transform hover:scale-105 border border-primary-400/50">
                  INITIATE CONTACT <ArrowRight className="size-4" />
                </a>
                <a href="#use-cases" className="inline-flex items-center gap-2 rounded-none border-2 border-science-400 px-6 py-4 text-science-400 font-rajdhani font-bold hover:bg-science-400 hover:text-space-900 transition-all duration-300">
                  EXPLORE CAPABILITIES
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="rounded-none bg-space-800/40 p-8 shadow-2xl ring-2 ring-primary-400/30 backdrop-blur-sm border border-primary-400/20">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-8 w-8 text-primary-400 animate-pulse-slow" />
                    <span className="font-orbitron font-bold text-xl text-primary-400">COLLECTIVE CAPABILITIES</span>
                  </div>
                </div>
                
                <ul className="space-y-4 text-primary-100">
                  <li className="flex items-start gap-3 group">
                    <Cpu className="mt-1 h-5 w-5 text-science-400 group-hover:animate-float" />
                    <span className="font-exo">Native uncertainty ledger & quantum audit trail</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <Activity className="mt-1 h-5 w-5 text-command-400 group-hover:animate-float" />
                    <span className="font-exo">Safety & policy gates integrated by design</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <Clock className="mt-1 h-5 w-5 text-engineering-400 group-hover:animate-float" />
                    <span className="font-exo">Real‑time, sub‑millisecond decision processing</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <Globe2 className="mt-1 h-5 w-5 text-primary-400 group-hover:animate-float" />
                    <span className="font-exo">Multimodal: text · image · audio · sensor · quantum</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE METRICS - Borg Style */}
      <section className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-primary-400 to-command-400 bg-clip-text text-transparent">
              COLLECTIVE PERFORMANCE MATRIX
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {kpi: '3×', label: 'Faster inference vs traditional AI', color: 'primary'},
              {kpi: '150 ms', label: 'End‑to‑end decision latency', color: 'science'},
              {kpi: '98.7%', label: 'Epistemic accuracy rating', color: 'command'},
              {kpi: '70%↓', label: 'Cost per TFLOP reduction', color: 'engineering'},
            ].map((m, i) => (
              <div key={i} className={`rounded-none border-2 border-${m.color}-400/30 p-6 shadow-neon-${m.color} bg-space-800/40 backdrop-blur-sm hover:border-${m.color}-400/60 transition-all duration-300 group`}>
                <div className="text-3xl font-orbitron font-bold text-white group-hover:animate-pulse-slow">{m.kpi}</div>
                <div className="mt-2 text-primary-200 font-rajdhani">{m.label}</div>
              </div>
            ))}
          </div>
          
          <p className="mt-6 text-sm text-primary-300 text-center font-exo">
            Benchmarks vs. leading general‑purpose LLMs on trust‑critical tasks; details and methodology available under NDA clearance.
          </p>
        </div>
      </section>

      {/* WHY NOW - ASSIMILATION IMPERATIVE */}
      <section className="py-20 bg-gradient-to-br from-space-800 to-space-900 relative overflow-hidden border-t border-primary-400/20">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-command-400/5 rounded-none blur-3xl animate-float transform rotate-45"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-science-400/5 rounded-none blur-2xl animate-float transform -rotate-12" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-command-400 to-science-400 bg-clip-text text-transparent">
                STRATEGIC IMPERATIVE: WHY NOW
              </h2>
              <ul className="mt-6 space-y-4 text-primary-100">
                <li className="flex gap-3 group">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-command-400 group-hover:animate-float" />
                  <span className="font-exo"><strong className="text-command-400">Quantum advantage realized:</strong> AI spend across regulated sectors is accelerating toward the trillion‑dollar mark; organizations require explainable, audit‑ready collective intelligence systems.</span>
                </li>
                <li className="flex gap-3 group">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-science-400 group-hover:animate-float" />
                  <span className="font-exo"><strong className="text-science-400">Compliance protocols integrated:</strong> New safety regulations require traceability, human oversight, and risk controls — CUBE architecture ships with these by design.</span>
                </li>
                <li className="flex gap-3 group">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary-400 group-hover:animate-float" />
                  <span className="font-exo"><strong className="text-primary-400">Hardware‑software symbiosis:</strong> QITHMA co‑optimization delivers unprecedented speed at dramatically lower unit cost.</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:col-span-5">
              <div className="rounded-none bg-space-800/40 p-8 shadow-xl border-2 border-science-400/30 backdrop-blur-sm">
                <div className="text-sm text-science-400 font-orbitron font-bold mb-4">COMPLIANCE & GOVERNANCE MATRIX</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 group">
                    <ShieldCheck className="size-5 text-command-400 group-hover:animate-float" />
                    <span className="font-rajdhani text-primary-100">EU AI Act high‑risk system readiness</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <ShieldCheck className="size-5 text-science-400 group-hover:animate-float" />
                    <span className="font-rajdhani text-primary-100">NIST AI Risk Management Framework alignment</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <ShieldCheck className="size-5 text-primary-400 group-hover:animate-float" />
                    <span className="font-rajdhani text-primary-100">Continuous quantum audit logging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES - TACTICAL APPLICATIONS */}
      <section id="use-cases" className="py-20 bg-gradient-to-b from-space-900 to-space-800 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-primary-400 to-command-400 bg-clip-text text-transparent">
              TACTICAL APPLICATIONS
            </h2>
            <p className="mt-4 text-primary-200 max-w-4xl mx-auto font-exo text-lg">
              Designed for missions where errors are costly. Below are representative deployments and outcome metrics achievable with CUBE collective intelligence. 
              Specific parameters are optimized for your operational requirements and data architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <article key={i} className={`rounded-none border-2 border-${useCase.color}-400/30 p-8 shadow-neon-${useCase.color} bg-space-800/40 backdrop-blur-sm hover:border-${useCase.color}-400/60 transition-all duration-300 group hover:transform hover:scale-105`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`text-${useCase.color}-400 group-hover:animate-float`}>
                    {useCase.icon}
                  </div>
                  <div className="text-lg font-orbitron font-bold text-white">{useCase.title}</div>
                </div>
                
                <p className="text-primary-200 font-exo mb-6 leading-relaxed">{useCase.desc}</p>
                
                <ul className="space-y-3">
                  {useCase.points.map((point, j) => (
                    <li key={j} className="flex gap-3 group/item">
                      <CheckCircle2 className={`mt-0.5 shrink-0 h-4 w-4 text-${useCase.color}-400 group-hover/item:animate-float`} />
                      <span className="text-sm font-rajdhani text-primary-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGE */}
      <section className="py-20 bg-gradient-to-br from-space-800 to-space-900 relative overflow-hidden border-t border-command-400/20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-primary-400/10 rounded-none blur-3xl animate-float transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-command-400/10 rounded-none blur-2xl animate-float transform -rotate-45" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-command-400 to-science-400 bg-clip-text text-transparent">
                WHY CUBE AI OUTPERFORMS
              </h2>
              <ul className="mt-6 space-y-4 text-primary-100">
                <li className="flex gap-3 group">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-command-400 group-hover:animate-float" />
                  <span className="font-exo"><strong className="text-command-400">Certainty by design:</strong> Every decision carries a calibrated confidence score and a replayable quantum audit trail with full provenance tracking.</span>
                </li>
                <li className="flex gap-3 group">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-science-400 group-hover:animate-float" />
                  <span className="font-exo"><strong className="text-science-400">Speed at quantum scale:</strong> Kernel‑level optimizations and smart memory pathways make real‑time inference routine across all operational domains.</span>
                </li>
                <li className="flex gap-3 group">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary-400 group-hover:animate-float" />
                  <span className="font-exo"><strong className="text-primary-400">Compliance‑first architecture:</strong> Built‑in policy gates and human‑in‑the‑loop controls simplify approvals in regulated environments.</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:col-span-6">
              <div className="rounded-none border-2 border-engineering-400/30 p-8 bg-space-800/40 backdrop-blur-sm">
                <h3 className="text-xl font-orbitron font-bold text-engineering-400 mb-6">OPERATIONAL RESULTS</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-none bg-space-700/60 p-4 border border-primary-400/20">
                    <div className="text-2xl font-orbitron font-bold text-primary-400">70%</div>
                    <div className="text-sm font-rajdhani text-primary-200">Faster SAR/radar anomaly triage</div>
                  </div>
                  <div className="rounded-none bg-space-700/60 p-4 border border-science-400/20">
                    <div className="text-2xl font-orbitron font-bold text-science-400">50-80%</div>
                    <div className="text-sm font-rajdhani text-science-200">Reduction in false alarms</div>
                  </div>
                  <div className="rounded-none bg-space-700/60 p-4 border border-command-400/20">
                    <div className="text-2xl font-orbitron font-bold text-command-400">2-4×</div>
                    <div className="text-sm font-rajdhani text-command-200">Throughput on perception loops</div>
                  </div>
                  <div className="rounded-none bg-space-700/60 p-4 border border-engineering-400/20">
                    <div className="text-2xl font-orbitron font-bold text-engineering-400">Weeks→Days</div>
                    <div className="text-sm font-rajdhani text-engineering-200">Scientific discovery cycles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - INITIATE CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary-400/10 rounded-none blur-3xl animate-float transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-command-400/10 rounded-none blur-2xl animate-float transform -rotate-12" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="rounded-none bg-gradient-to-br from-space-800/60 to-space-700/60 p-12 border-2 border-primary-400/30 backdrop-blur-sm shadow-neon">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative">
                    <Zap className="h-12 w-12 text-primary-400 animate-pulse-slow" />
                    <div className="absolute inset-0 bg-primary-400/30 rounded-full blur-2xl animate-glow"></div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-primary-400 to-command-400 bg-clip-text text-transparent">
                      READY TO EVALUATE CUBE AI FOR YOUR MISSION?
                    </h2>
                    <p className="text-primary-200 font-exo">Initiate collective protocol for mission-critical operations</p>
                  </div>
                </div>
                
                <p className="text-lg text-primary-100 max-w-3xl font-rajdhani leading-relaxed mb-8">
                  We'll map your operational requirements, estimate ROI potential, and prepare a comprehensive integration strategy. 
                  Technical demonstrations are available for qualified partners under appropriate security clearances.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=omega.bhasker@gmail.com&su=CUBE%20AI%20—%20Technical%20Briefing%20Request" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 rounded-none bg-gradient-to-r from-primary-600 to-command-600 px-8 py-4 text-white font-rajdhani font-bold shadow-neon hover:shadow-neon-command transition-all duration-300 transform hover:scale-105 border border-primary-400/50">
                    <Mail className="size-5" /> ESTABLISH COMMUNICATION
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-4">
                <div className="rounded-none bg-space-800/60 p-6 border border-command-400/30">
                  <h3 className="font-orbitron font-bold text-command-400 mb-4">CONTACT PROTOCOLS</h3>
                  <ul className="space-y-3 text-sm font-rajdhani text-primary-200">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse-slow"></div>
                      Technical briefings available
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-science-400 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                      NDA-protected demonstrations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-command-400 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
                      Custom integration planning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-engineering-400 rounded-full animate-pulse-slow" style={{animationDelay: '3s'}}></div>
                      ROI analysis & projections
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;