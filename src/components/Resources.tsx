import React from 'react';
import { Github, BookOpen, FileText, MessageCircle } from 'lucide-react';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, link, linkText }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
      >
        {linkText} →
      </a>
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to get started with MRpro and become proficient in MRI reconstruction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ResourceCard
            icon={<Github className="h-6 w-6" />}
            title="Source Code"
            description="Access the complete source code, contribute to the project, or report issues on GitHub."
            link="https://github.com/PTB-MR/mrpro"
            linkText="View on GitHub"
          />
          
          <ResourceCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Documentation"
            description="Comprehensive documentation with API references, tutorials, and examples."
            link="https://docs.emerpro.de"
            linkText="Read the docs"
          />
          
          <ResourceCard
            icon={<FileText className="h-6 w-6" />}
            title="Examples"
            description="Practical code examples showing how to use MRpro for different reconstruction scenarios."
            link="https://github.com/PTB-MR/mrpro/tree/main/examples"
            linkText="Browse examples"
          />
          
          <ResourceCard
            icon={<MessageCircle className="h-6 w-6" />}
            title="Issue Tracker"
            description="Report bugs, request features, or get help with implementation issues."
            link="https://github.com/PTB-MR/mrpro/issues"
            linkText="Report an issue"
          />
        </div>
      </div>
    </section>
  );
};

export default Resources;