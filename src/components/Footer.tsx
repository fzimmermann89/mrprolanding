import React, { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  name?: string;
}

// Blacklist of contributors to exclude
const EXCLUDED_CONTRIBUTORS = ['pre-commit-ci', 'dependabot', 'dependabot[bot]'];

const Footer: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/PTB-MR/mrpro/contributors');
        const data = await response.json();
        const filteredContributors = data.filter(
          (contributor: Contributor) => !EXCLUDED_CONTRIBUTORS.includes(contributor.login)
        );

        // Fetch real names for each contributor
        const contributorsWithNames = await Promise.all(
          filteredContributors.map(async (contributor: Contributor) => {
            try {
              const userResponse = await fetch(`https://api.github.com/users/${contributor.login}`);
              const userData = await userResponse.json();
              return { ...contributor, name: userData.name || contributor.login };
            } catch (error) {
              return { ...contributor, name: contributor.login };
            }
          })
        );

        setContributors(contributorsWithNames);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img src="/logo.svg" alt="MRpro Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">MRpro</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/PTB-MR/mrpro" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://docs.emerpro.de" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Documentation"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-400 text-sm">
                MRpro is a Python package for MR image reconstruction and processing in PyTorch. 
                Development was initiated at PTB Berlin.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/PTB-MR/mrpro" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.emerpro.de" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/PTB-MR/mrpro/issues" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Bug Reports
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://colab.research.google.com/github/PTB-MR/mrpro/blob/main/examples/notebooks/direct_reconstruction.ipynb" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Try in Colab
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/PTB-MR/mrpro/tree/main/examples" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/PTB-MR/mrpro/issues/new" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Report Issues
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/PTB-MR/mrpro/blob/main/CONTRIBUTING.md" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contribute
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-xs text-gray-400">
                <h3 className="inline font-semibold">Impressum</h3>
                <span className="ml-2">- Verantwortlich im Sinne des Pressegesetzes</span>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p>
                      Felix Zimmermann<br />
                      Physikalisch-Technische<br />
                      Bundesanstalt (PTB)
                    </p>
                  </div>
                  <div>
                    <p>
                      Abbestraße 2-12<br />
                      10587 Berlin<br />
                      Deutschland
                    </p>
                    <p className="mt-1">
                      E-Mail: <a href="mailto:info@emerpro.de" className="hover:text-white transition-colors">info@emerpro.de</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-4">Contributors</h3>
                <div className="grid grid-cols-2 gap-4">
                  {contributors.map((contributor) => (
                    <a
                      key={contributor.login}
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2"
                    >
                      <img
                        src={contributor.avatar_url}
                        alt={`${contributor.name}'s avatar`}
                        className="w-8 h-8 rounded-full hover:ring-2 hover:ring-blue-500 transition-all duration-150"
                        title={contributor.name}
                      />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-150">
                        {contributor.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-4">
              <p className="text-xs text-gray-500 text-center">
                MRpro is licensed under the <a href="https://github.com/PTB-MR/mrpro/blob/main/LICENSE" className="text-gray-400 hover:text-white transition-colors">Apache License 2.0</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;