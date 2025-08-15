import React from 'react';
import { Article } from '../types';

const articles: Article[] = [
  {
    imageUrl: 'https://i.postimg.cc/y8X8Rz4N/Gemini-Generated-Image-tmg78ftmg78ftmg7.png',
    title: 'Smart Umbrella Sharing System for Modern Cities',
    tags: ['IoT', 'Flutter App','Startups'],
    url: 'https://umbrashare.netlify.app',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'What exactly is MCP, and why is it trending?',
    tags: ['Tech', 'AI', 'Machine learning'],
    url: '#',
  },

];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-cyan-500/30 shadow-lg">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-bold text-xl text-white mb-3 flex-grow">{article.title}</h4>
                <div className="flex flex-wrap gap-2">
                    {article.tags.map(tag => (
                        <span key={tag} className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </a>
);

const ArticlesSection: React.FC = () => {
  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Articles</h2>
        <p className="text-center text-gray-400 mt-2 mb-16 text-lg">
            I write clean code, automate tasks, and build apps that don't break. Learning, growing, and making the web better.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
