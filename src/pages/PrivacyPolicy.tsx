import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-space-950 text-white min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <Shield className="h-16 w-16 text-primary-400 animate-pulse-slow" />
            </div>
            <h1 className="text-4xl font-orbitron font-bold mb-4 bg-gradient-to-r from-primary-400 to-command-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-space-800/40 p-8 rounded-xl border border-primary-400/30 backdrop-blur-sm">
        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">1. Information We Collect</h2>
          <p className="text-primary-100 font-exo mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-4 text-primary-100 font-rajdhani">
            <li>Contact information (name, email address, phone number)</li>
            <li>Resume and job application materials</li>
            <li>Communications you send to us</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">2. How We Use Your Information</h2>
          <p className="text-primary-100 font-exo mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4 text-primary-100 font-rajdhani">
            <li>Respond to your inquiries</li>
            <li>Process job applications</li>
            <li>Improve our services</li>
            <li>Send you updates about our company (with your consent)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">3. Information Sharing</h2>
          <p className="text-primary-100 font-exo mb-4">We do not sell or share your personal information with third parties except:</p>
          <ul className="list-disc pl-6 mb-4 text-primary-100 font-rajdhani">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">4. Data Security</h2>
          <p className="text-primary-100 font-exo">We implement appropriate technical and organizational measures to protect your personal information.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">5. Your Rights</h2>
          <p className="text-primary-100 font-exo mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 text-primary-100 font-rajdhani">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-orbitron font-bold mb-4 text-command-400">6. Contact Us</h2>
          <p className="text-primary-100 font-exo mb-2">For any questions about this privacy policy, please contact us at:</p>
          <p className="text-primary-100 font-rajdhani">Email: omega.bhasker@gmail.com</p>
        </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;