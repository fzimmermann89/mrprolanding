import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Contributors from './Contributors';

const Footer: React.FC = () => {
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
              <p className="text-gray-400 text-sm mt-4">
                Licensed under the 
                <a 
                  href="https://github.com/PTB-MR/mrpro/blob/main/LICENSE" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Apache License 2.0
                </a>
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-xs text-gray-500 md:col-span-1">
                <h3 className="font-semibold mb-2">Impressum</h3>
                <p className="mb-2">
                  Verantwortlich im Sinne des Pressegesetzes
                </p>
                <p>
                  Felix Zimmermann<br />
                  Physikalisch-Technische Bundesanstalt (PTB)<br />
                  Abbestraße 2-12<br />
                  10587 Berlin<br />
                </p>
                <p className="mt-2">
                  E-Mail: <a href="mailto:info@emerpro.de" className="hover:text-white transition-colors">info@emerpro.de</a>
                </p>
              </div>

              <div className="md:col-span-3">
                <Contributors />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;