import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-space-950 text-white min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <FileText className="h-16 w-16 text-command-400 animate-pulse-slow" />
            </div>
            <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-to-r from-command-400 to-science-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-space-800/40 p-8 rounded-xl border border-command-400/30 backdrop-blur-sm">
        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">1. Acceptance of Terms</h2>
          <p className="text-primary-100 font-exo">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">2. Use License</h2>
          <p className="text-primary-100 font-exo">Permission is granted to temporarily download one copy of the materials (information or software) on StableOmega's website for personal, non-commercial transitory viewing only.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">3. Disclaimer</h2>
          <p className="text-primary-100 font-exo">The materials on StableOmega's website are provided on an 'as is' basis. StableOmega makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">4. Limitations</h2>
          <p className="text-primary-100 font-exo">In no event shall StableOmega or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StableOmega's website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">5. Revisions and Errata</h2>
          <p className="text-primary-100 font-exo">The materials appearing on StableOmega's website could include technical, typographical, or photographic errors. StableOmega does not warrant that any of the materials on its website are accurate, complete or current.</p>
        </section>

        <section>
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">6. Contact Information</h2>
          <p className="text-primary-100 font-exo mb-2">If you have any questions about these Terms of Service, please contact us at:</p>
          <p className="text-primary-100 font-rajdhani">Email: omega.bhasker@gmail.com</p>
        </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;