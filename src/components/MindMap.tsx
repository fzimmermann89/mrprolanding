import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  Zap, 
  Layers, 
  Brain,
  ArrowRight,
  FileText,
  Settings,
  BarChart3,
  Shuffle,
  Target,
  Wand2,
  Activity,
  Users
} from 'lucide-react';

interface MindMapNodeProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
  position: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

const MindMapNode: React.FC<MindMapNodeProps> = ({ 
  title, 
  icon, 
  items, 
  position, 
  color, 
  isActive, 
  onClick 
}) => {
  return (
    <div 
      className={`absolute ${position} cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-110 z-20' : 'hover:scale-105 z-10'
      }`}
      onClick={onClick}
    >
      <div className={`relative ${isActive ? 'animate-pulse' : ''}`}>
        {/* Connection line to center */}
        <div className={`absolute w-16 h-0.5 ${color} opacity-30 ${
          position.includes('left') ? 'right-full top-1/2 -translate-y-1/2' :
          position.includes('right') ? 'left-full top-1/2 -translate-y-1/2' :
          position.includes('top') ? 'bottom-full left-1/2 -translate-x-1/2 w-0.5 h-16' :
          'top-full left-1/2 -translate-x-1/2 w-0.5 h-16'
        }`}></div>
        
        {/* Node */}
        <div className={`
          bg-white rounded-2xl shadow-lg border-2 ${color} p-6 min-w-64
          ${isActive ? 'shadow-2xl' : 'hover:shadow-xl'}
          transition-all duration-300
        `}>
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 rounded-xl ${color.replace('border', 'bg').replace('600', '100')} ${color.replace('border', 'text')} flex items-center justify-center mr-3`}>
              {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          
          {isActive && (
            <div className="space-y-2 animate-fadeIn">
              {items.map((item, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <div className={`w-2 h-2 rounded-full ${color.replace('border', 'bg')} mr-2`}></div>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MindMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('center');

  const nodes = [
    {
      id: 'data',
      title: 'Data',
      icon: <Database className="h-6 w-6" />,
      items: [
        'Import/Export ISMRMRD',
        'Data rearrangement',
        'Flexible subsetting',
        'Header metadata',
        'PyTorch tensors'
      ],
      position: 'top-8 left-1/2 -translate-x-1/2',
      color: 'border-blue-600'
    },
    {
      id: 'operators',
      title: 'Operators',
      icon: <Cpu className="h-6 w-6" />,
      items: [
        'FourierOp (FFT/nuFFT)',
        'GridSamplingOp',
        'Composition (@)',
        'Addition (+)',
        'Differentiable'
      ],
      position: 'top-1/2 -translate-y-1/2 right-8',
      color: 'border-green-600'
    },
    {
      id: 'algorithms',
      title: 'Algorithms',
      icon: <Zap className="h-6 w-6" />,
      items: [
        'LBFGS optimizer',
        'PDHG solver',
        'Coil sensitivity maps',
        'Signal models',
        'Regularization'
      ],
      position: 'bottom-8 right-1/4',
      color: 'border-purple-600'
    },
    {
      id: 'reconstructions',
      title: 'Reconstructions',
      icon: <Layers className="h-6 w-6" />,
      items: [
        'Direct reconstruction',
        'TV regularization',
        'Iterative SENSE',
        'Compressed sensing',
        'Custom pipelines'
      ],
      position: 'bottom-8 left-1/4',
      color: 'border-orange-600'
    },
    {
      id: 'datasets',
      title: 'Datasets',
      icon: <Brain className="h-6 w-6" />,
      items: [
        'FastMRI dataset',
        'Brainweb phantoms',
        'M4Raw low-field',
        'Custom coil arrays',
        'Unified interface'
      ],
      position: 'top-1/2 -translate-y-1/2 left-8',
      color: 'border-teal-600'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            MRpro Architecture
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore the key components that make MRpro a powerful toolkit for MRI reconstruction and processing
          </p>
        </div>

        {/* Mind Map Container */}
        <div className="relative w-full h-[800px] max-w-6xl mx-auto">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-3xl p-8 shadow-2xl">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-2">MRpro</h2>
                <p className="text-blue-100">PyTorch MRI Toolkit</p>
              </div>
            </div>
          </div>

          {/* Mind Map Nodes */}
          {nodes.map((node) => (
            <MindMapNode
              key={node.id}
              {...node}
              isActive={activeNode === node.id}
              onClick={() => setActiveNode(activeNode === node.id ? 'center' : node.id)}
            />
          ))}

          {/* Floating Info Panel */}
          {activeNode !== 'center' && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-6 max-w-md animate-slideUp">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {nodes.find(n => n.id === activeNode)?.title} Component
                </h4>
                <p className="text-sm text-gray-600">
                  Click on different sections to explore MRpro's modular architecture
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Feature Grid Below */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Modular Design</h3>
            <p className="text-gray-600 text-sm">
              Each component is designed to work independently or in combination
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Wand2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Differentiable</h3>
            <p className="text-gray-600 text-sm">
              All operators support automatic differentiation for AI integration
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Open source with active development and community contributions
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default MindMap;