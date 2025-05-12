import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeExampleProps {
  id: string;
  title: string;
  description: string;
  code: string;
  link: string;
}

const examples: CodeExampleProps[] = [
  {
    id: 'quant',
    title: 'Quantitative Parameters',
    description: 'Quantitative parameter maps can be obtained by creating a functional to be minimized and calling a non-linear solver such as ADAM.',
    code: `# Define signal model
model = MagnitudeOp() @ InversionRecovery(ti=idata_multi_ti.header.ti)

# Define loss function and combine with signal model
mse = MSE(idata_multi_ti.data.abs())
functional = mse @ model

# Run optimization
params_result = adam(functional, [m0_start, t1_start], n_iterations=n_iterations, learning_rate=learning_rate)`,
    link: 'https://github.com/PTB-MR/mrpro/blob/main/examples/scripts/qmri_sg_challenge_2024_t1.py'
  },
  {
    id: 'pulseq',
    title: 'Pulseq Support',
    description: 'For data acquired using pulseq-based sequences, MRpro can automatically calculate the trajectory directly from the provided seq-file, making it easy to work with custom sequences.',
    code: `# Read raw data and calculate trajectory using KTrajectoryPulseq
kdata = KData.from_file(data_file.name, KTrajectoryPulseq(seq_path=seq_file.name))`,
    link: 'https://github.com/PTB-MR/mrpro/blob/main/examples/scripts/comparison_trajectory_calculators.py'
  }
];

const CodeExample: React.FC<{ example: CodeExampleProps }> = ({ example }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{example.title}</h3>
        <p className="text-gray-700 mb-4">{example.description}</p>
        <div className="relative">
          <div className="absolute top-3 right-3">
            <button
              onClick={copyToClipboard}
              className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors focus:outline-none"
              aria-label="Copy code"
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-500" />}
            </button>
          </div>
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <code className="font-mono whitespace-pre">
              {example.code.split('\n').map((line, index) => (
                <span key={index} className={line.trim().startsWith('#') ? 'text-gray-400' : 'text-gray-800'}>
                  {line}
                  {index < example.code.split('\n').length - 1 ? '\n' : ''}
                </span>
              ))}
            </code>
          </pre>
        </div>
        <div className="mt-4">
          <a
            href={example.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            View full example →
          </a>
        </div>
      </div>
    </div>
  );
};

const CodeExamples: React.FC = () => {
  return (
    <section id="examples" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Code Examples</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how MRpro simplifies MR image reconstruction and processing with these practical examples.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {examples.map((example) => (
            <CodeExample key={example.id} example={example} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;