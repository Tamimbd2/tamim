import React from 'react';

const EducationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.002z" />
    </svg>
);

const CertificationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zM4.93.878a.5.5 0 0 1 .53.854l-1.5 2.598a.5.5 0 1 1-.866-.5l1.5-2.598a.5.5 0 0 1 .336-.354zm6.14 0a.5.5 0 0 1 .53.854l-1.5 2.598a.5.5 0 1 1-.866-.5l1.5-2.598a.5.5 0 0 1 .336-.354zM16 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM2 8a.5.5 0 0 1-.5.5H0a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 .5.5zM4.93 15.122a.5.5 0 0 1-.53-.854l1.5-2.598a.5.5 0 0 1 .866.5l-1.5 2.598a.5.5 0 0 1-.336.354zm6.14 0a.5.5 0 0 1-.53-.854l1.5-2.598a.5.5 0 0 1 .866.5l-1.5 2.598a.5.5 0 0 1-.336.354zM8 16a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zM8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
    </svg>
);

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Education & Certifications</h2>
        <p className="text-center text-gray-400 mt-2 mb-16 text-lg">Academic background and achievements</p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          <div className="glass-card p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <EducationIcon />
              <h3 className="text-2xl font-bold text-white ml-4">Education</h3>
            </div>
            <div>
                <p className="text-xl font-semibold text-gray-100">Bachelor of Science (B.Sc.)</p>
                <p className="text-lg text-gray-300 mt-1">Computer Science & Engineering</p>
                <p className="text-gray-400 mt-2">Green University of Bangladesh</p>
                <p className="text-gray-400 mt-1 text-sm">Major: Mobile Application Development</p>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-lg">
            <div className="flex items-center mb-6">
                <CertificationIcon />
                <h3 className="text-2xl font-bold text-white ml-4">Certifications</h3>
            </div>
            <div className="relative pl-6">
                <div className="absolute left-0 top-1 bottom-1 w-1 bg-gradient-to-b from-cyan-400 to-teal-500 rounded-full"></div>
                <p className="text-xl font-semibold text-gray-100">Ostad Flutter & Dart Certificate</p>
                <p className="text-gray-300 mt-1">Professional certification in Flutter development</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;