import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

const Installation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const installCommand = 'pip install mrpro';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Install MRpro and start working with MRI reconstruction in just a few seconds.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <div className="p-1 bg-gradient-to-r from-blue-600 to-teal-500"></div>
            <div className="px-6 py-4 flex items-center">
              <Terminal className="text-gray-400 mr-3" />
              <span className="text-gray-400">Installation</span>
            </div>
            <div className="relative px-6 py-8 bg-gray-950">
              <pre className="font-mono text-gray-200 text-lg">
                {installCommand}
              </pre>
              <button
                onClick={copyToClipboard}
                className="absolute top-8 right-6 p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors focus:outline-none"
                aria-label="Copy installation command"
              >
                {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
            <div className="p-6 bg-gray-900">
              <p className="text-gray-400 text-sm">
                MRpro requires Python 3.10+ and PyTorch 2.3+. For more installation options and detailed requirements, 
                please refer to the <a href="https://docs.mrpro.rocks/getting_started.html" className="text-blue-400 hover:text-blue-300 transition-colors">documentation</a>.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Try in Colab</h3>
              <p className="text-gray-700 mb-6">
                Experiment with MRpro without installing anything on your local machine by using Google Colab.
              </p>
              <a
                href="https://colab.research.google.com/github/PTB-MR/mrpro/blob/main/examples/notebooks/direct_reconstruction.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Open in Colab
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Documentation</h3>
              <p className="text-gray-700 mb-6">
                Explore the comprehensive documentation to learn all the features and capabilities of MRpro.
              </p>
              <a
                href="https://docs.mrpro.rocks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Read the Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;