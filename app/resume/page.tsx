import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'My professional resume and work experience',
};

const ResumePage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Resume</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
        <p>
          A brief summary of your professional experience and key skills. This should be a
          concise paragraph highlighting your strengths and career objectives.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Job Title</h3>
            <p className="text-gray-600">Company Name | Start Date - End Date</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Key responsibility or achievement</li>
              <li>Another important task or accomplishment</li>
              <li>A third bullet point highlighting your contributions</li>
            </ul>
          </div>
          {/* Add more job experiences as needed */}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">Degree Name</h3>
          <p className="text-gray-600">University Name | Graduation Year</p>
          <p>Any relevant details about your studies or achievements</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-5">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          {/* Add more skills as needed */}
        </ul>
      </section>
    </div>
  );
};

export default ResumePage;