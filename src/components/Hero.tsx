import React from 'react';
import { ArrowRight, Github, BookOpen, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="absolute inset-0 pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative mb-6 inline-block">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 opacity-75 blur"></div>
              <span className="relative inline-block py-1 px-3 bg-white text-blue-600 font-medium text-sm rounded-md">
                PyTorch + MRI
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Advanced MRI data processing with
              <span className="text-blue-600 block">MRpro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              A powerful open-source Python package for MR image reconstruction and processing 
              with PyTorch.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#install"
                className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://github.com/PTB-MR/mrpro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white border border-gray-300 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://docs.emerpro.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white border border-gray-300 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Docs
              </a>
              <a
                href="https://colab.research.google.com/github/PTB-MR/mrpro/blob/main/examples/notebooks/direct_reconstruction.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white border border-gray-300 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <Play className="mr-2 h-5 w-5" />
                Try It
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 opacity-75 blur"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl overflow-hidden">
                <div className="text-sm font-mono mb-2 text-gray-500">Example: Simple reconstruction</div>
                <pre className="text-xs md:text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
                  <code className="font-mono whitespace-pre">
                    <span className="text-gray-400"># Tell mrpro the type of trajectory</span>
                    {'\n'}trajectory = KTrajectoryCartesian(){'\n\n'}
                    <span className="text-gray-400"># Load in the Data from the ISMRMRD file</span>
                    {'\n'}kdata = KData.from_file(filename, trajectory){'\n\n'}
                    <span className="text-gray-400"># Perform the reconstruction</span>
                    {'\n'}reconstruction = DirectReconstruction(kdata){'\n'}img = reconstruction(kdata)
                  </code>
                </pre>
                <div className="mt-4 flex justify-end">
                  <a
                    href="https://github.com/PTB-MR/mrpro/blob/main/examples/scripts/direct_reconstruction.py"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View full example →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;