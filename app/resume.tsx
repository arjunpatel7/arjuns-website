import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detailed Resume',
  description: 'A comprehensive overview of my professional experience and skills',
};

const ResumePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Detailed Resume</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
        {/* Add your professional summary here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        {/* Add your detailed work experience here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        {/* Add your education details here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        {/* Add a comprehensive list of your skills here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        {/* Add any relevant certifications here */}
      </section>
    </div>
  );
};

export default ResumePage;