import React from 'react';
import { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="glass-card p-6 rounded-lg flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-all duration-300 group">
    <div className="text-cyan-400 mb-3 transition-colors duration-300 group-hover:text-teal-300">{skill.icon}</div>
    <p className="font-semibold text-gray-200">{skill.name}</p>
    <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-cyan-400 transition-all duration-300"></div>
  </div>
);

const SectionTitle: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
    </div>
);

const Subtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center sm:text-left">{children}</h3>
);

const skillsIcons = {
    CrossPlatform: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    StateManagement: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h5V4H4zm0 0l5 5m6-5v5h5V4h-5zm0 0l5 5M4 15v5h5v-5H4zm0 0l5 5m6-5v5h5v-5h-5zm0 0l5 5" /></svg>,
    Backend: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" /></svg>,
    OfflineStorage: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5" /></svg>,
    RealtimeDB: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    UIUX: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    VersionControl: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9l-6-6-6 6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v13.5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12h12" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a2 2 0 100-4 2 2 0 000 4z" /></svg>,
    ContentCreation: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    Communication: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    TimeManagement: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

const technicalSkills: Skill[] = [
    { name: 'Cross-platform (Android & iOS)', icon: skillsIcons.CrossPlatform },
    { name: 'State Management (BLOC, Cubit)', icon: skillsIcons.StateManagement },
    { name: 'Backend Integration (REST APIs, Dio)', icon: skillsIcons.Backend },
    { name: 'Offline Storage (SQLite)', icon: skillsIcons.OfflineStorage },
    { name: 'Real-time Database (Firebase)', icon: skillsIcons.RealtimeDB },
    { name: 'UI/UX (Figma to Flutter)', icon: skillsIcons.UIUX },
    { name: 'Version Control (Git & GitHub)', icon: skillsIcons.VersionControl },
];

const additionalSkills: Skill[] = [
    { name: 'Content Creation (Adobe Premiere Pro, Canva)', icon: skillsIcons.ContentCreation },
    { name: 'Communication', icon: skillsIcons.Communication },
    { name: 'Time Management', icon: skillsIcons.TimeManagement },
];


const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="My Skills" subtitle="The tools and technologies I use to build things." />
        <div className="mb-16">
          <Subtitle>Technical Skills</Subtitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {technicalSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        <div>
          <Subtitle>Additional Skills</Subtitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {additionalSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;