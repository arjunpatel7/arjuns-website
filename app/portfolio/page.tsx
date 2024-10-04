import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio of projects, videos, articles, and appearances',
};

const PortfolioPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Article Title 1: A Brief Description
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Article Title 2: Another Interesting Topic
            </a>
          </li>
          {/* Add more articles as needed */}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">YouTube Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Video Title 1</h3>
            <p className="text-sm text-gray-600 mb-2">Brief description of the video</p>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Placeholder for video embed */}
              <div className="flex items-center justify-center h-full">Video Embed</div>
            </div>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Video Title 2</h3>
            <p className="text-sm text-gray-600 mb-2">Another video description</p>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Placeholder for video embed */}
              <div className="flex items-center justify-center h-full">Video Embed</div>
            </div>
          </div>
          {/* Add more video placeholders as needed */}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">GitHub Projects</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Project Name 1</h3>
            <p className="text-sm text-gray-600 mb-2">Brief description of the project</p>
            <a href="#" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Project Name 2</h3>
            <p className="text-sm text-gray-600 mb-2">Another project description</p>
            <a href="#" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
          {/* Add more project placeholders as needed */}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;