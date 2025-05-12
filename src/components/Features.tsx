import React, { useEffect, useState } from 'react';
import { 
  Database, 
  Cpu, 
  Compass, 
  Wand2, 
  BarChart4,
  Layers,
  Building2,
  Database as DatasetIcon,
  CheckCircle
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const [features, setFeatures] = useState<FeatureProps[]>([]);

  const initialFeatures: FeatureProps[] = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "ISMRMRD Support",
      description: "MRpro seamlessly integrates with the ISMRMRD format for MR raw data, making it easy to work with standard MRI datasets."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "PyTorch Integration",
      description: "All data containers utilize PyTorch tensors to ensure easy integration in PyTorch-based network schemes and GPU acceleration."
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Flexible Trajectories",
      description: "Supports both Cartesian and non-Cartesian (radial, spiral) sampling schemes, automatically detecting when FFT or nuFFT is required."
    },
    {
      icon: <Wand2 className="h-6 w-6" />,
      title: "Signal Models",
      description: "Implements a range of MR signal models including T1 recovery and WASABI for quantitative imaging applications."
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "Regularized Reconstruction",
      description: "Advanced reconstruction algorithms including Wavelet-based compressed sensing and total variation regularization."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Simple Indexing",
      description: "Effortlessly subset data, trajectories, and header information using intuitive indexing and rearranging operations on container classes."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "AI Building Blocks",
      description: "Comprehensive toolkit including differentiable linear operators and differentiable optimization for developing state-of-the-art reconstruction methods."
    },
    {
      icon: <DatasetIcon className="h-6 w-6" />,
      title: "Training Datasets",
      description: "Unified access to popular MRI datasets including FastMRI, M4raw low field data, and Brainweb through a common interface."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Extensive Testing",
      description: "Comprehensive test suite ensures reliability through unit tests and integration tests on real data."
    }
  ];

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: FeatureProps[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setFeatures(shuffleArray(initialFeatures));
  }, []);

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Main Features</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            MRpro provides a comprehensive set of tools for MR image reconstruction and processing in python
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;