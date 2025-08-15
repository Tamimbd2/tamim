import React from 'react';

const EmailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.992-.55-1.357l-2.28-2.28a2.25 2.25 0 00-3.182 0l-1.954 1.954a.658.658 0 01-.88-.046A11.022 11.022 0 016.354 9.354a.658.658 0 01-.046-.88l1.954-1.954a2.25 2.25 0 000-3.182L5.61 2.803a2.25 2.25 0 00-1.357-.55H2.25A2.25 2.25 0 000 4.5v2.25z" />
    </svg>
);

const LocationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahabub-alam-tamim/', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg> },
    { name: 'GitHub', url: 'https://github.com/Tamimbd2', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCewp3A03hDTa3s4aCEa_pLg', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg> },
    { name: 'Facebook', url: 'https://www.facebook.com/tamimbd2', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg> },
];

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900/70">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Let's Connect!</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Ready to bring your ideas to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-4xl mx-auto text-cyan-400">
            <div>
                <EmailIcon />
                <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                <a href="mailto:itstamim.ban@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">itstamim.ban@gmail.com</a>
            </div>
            <div>
                <PhoneIcon />
                <h4 className="font-bold text-white text-lg mb-1">Phone</h4>
                <a href="tel:01744463419" className="text-gray-300 hover:text-cyan-400 transition-colors">01744463419</a>
            </div>
            <div>
                <LocationIcon />
                <h4 className="font-bold text-white text-lg mb-1">Location</h4>
                <p className="text-gray-300">Khilkhet, Dhaka, Bangladesh</p>
            </div>
        </div>
        <div className="flex justify-center space-x-4 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white bg-white/5 hover:bg-cyan-500 transition-all duration-300 rounded-full p-3 flex items-center justify-center transform hover:scale-110"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-8">
            <p className="mb-4">
                Visit my website: <a href="http://www.tamimdev.netlify.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-cyan-400">www.tamimdev.netlify.app</a>
            </p>
            <p className="text-sm text-gray-500">
                &copy; 2025 Mahabub Alam Tamim. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;