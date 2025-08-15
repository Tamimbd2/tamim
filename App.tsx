import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ArticlesSection from './components/ArticlesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="text-gray-200 antialiased">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;