import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio of projects, videos, articles, and appearances',
};

const PortfolioPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">YouTube Videos</h2>
        {/* Add your YouTube video links or embeds here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        {/* Add your article links or summaries here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">GitHub Projects</h2>
        {/* Add your GitHub project links or descriptions here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Appearances</h2>
        {/* Add information about your appearances, talks, or events here */}
      </section>
    </div>
  );
};

export default PortfolioPage;