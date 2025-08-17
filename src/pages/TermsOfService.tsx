import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on StableOmega's website for personal, non-commercial transitory viewing only.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
          <p>The materials on StableOmega's website are provided on an 'as is' basis. StableOmega makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
          <p>In no event shall StableOmega or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StableOmega's website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Revisions and Errata</h2>
          <p>The materials appearing on StableOmega's website could include technical, typographical, or photographic errors. StableOmega does not warrant that any of the materials on its website are accurate, complete or current.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p className="mt-2">Email: omega.bhasker@gmail.com</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;