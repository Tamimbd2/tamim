import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    role: 'IoT & Flutter Developer',
    company: 'UmbraShare',
    period: 'Jan 2025 - Present',
    description: [
      'Built a Flutter app integrated with an IoT-based umbrella locking system.',
      'Integrated Firebase Authentication, Firestore Database, and Cloud Storage.',
    ],
    livePreviewUrl: 'https://umbrashare.netlify.app',
  },
  {
    role: 'Flutter Developer',
    company: 'StyleCart (E-commerce App)',
    period: 'Feb 2025 - Present',
    description: [
      'Developed a campus reporting app in Flutter with Firebase integration.',
      'Managed state with Provider and ensured smooth performance.',
    ],
    livePreviewUrl: 'https://github.com/Tamimbd2',
  },
];

const LivePreviewIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);


const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Work Experience</h2>
        <p className="text-center text-gray-400 mt-2 mb-16 text-lg">My professional journey</p>
        
        <div className="relative border-l-2 border-cyan-500/30">
            {experiences.map((exp, index) => (
                <div key={index} className="mb-10 ml-8">
                    <span className="absolute flex items-center justify-center w-4 h-4 bg-slate-800 rounded-full -left-2 ring-4 ring-cyan-500/50"></span>
                    
                    <div className="glass-card p-6 rounded-lg hover:shadow-cyan-500/20 shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                            <div>
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <p className="text-lg font-semibold text-gray-300">{exp.company}</p>
                            </div>
                            <span className="text-sm text-gray-400 whitespace-nowrap mt-2 sm:mt-0">{exp.period}</span>
                        </div>
                        
                        <p className="mt-2 text-gray-300">
                            {exp.description.join(' ')}
                        </p>

                        {exp.livePreviewUrl && (
                            <a
                                href={exp.livePreviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center mt-6 bg-cyan-600/50 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-600/80 transition-colors"
                            >
                                <LivePreviewIcon />
                                Live Preview
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;