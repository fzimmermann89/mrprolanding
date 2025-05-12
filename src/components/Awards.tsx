import React from 'react';
import { Award } from 'lucide-react';

const Awards: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <Award className="h-16 w-16 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Recognition & Awards</h2>
            <p className="text-xl text-gray-700 mb-12 text-center">
              MRpro has been recognized for its excellent performance in MRI reconstruction.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-10 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <div className="pl-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2024 ISMRM QMRI Study Group Challenge</h3>
                <p className="text-gray-700 mb-6">
                  2nd prize for Relaxometry (T2* and T1)
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-500 font-bold text-xl">2nd</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Recognized for excellence in quantitative MRI reconstruction techniques and 
                      particularly for T2* and T1 relaxometry implementations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;