import React from 'react';

const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400">Flutter Developer</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white my-4">Mahabub Tamim</h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
              Passionate Flutter Developer skilled in Dart, cross-platform mobile app development, and Firebase integration. Experienced in creating responsive, user-friendly interfaces.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/Tamimbd2"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Projects
                <ArrowRightIcon />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1rtU5y223DTEzCvw9HyvSwQ4srvWx1i1v"
                download
                className="inline-flex items-center bg-gray-200 text-slate-800 font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                <DownloadIcon />
                Download CV
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <img
                    src="https://i.postimg.cc/mgMKvFHh/150-1.png"
                    alt="Mahabub Alam Tamim"
                    className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white/20"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;