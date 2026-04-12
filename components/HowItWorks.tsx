import React from 'react';
import { STEPS } from '../constants';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Simple et rapide. Comment ça marche ?</h2>
          <p className="text-gray-600 text-lg">En 3 étapes simples, obtenez l'aide dont vous avez besoin.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 z-0"></div>

          {STEPS.map((step, index) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center shadow-soft mb-6 relative transition-all duration-300 group-hover:border-primary/20">
                <div className="absolute inset-0 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <step.icon size={32} className="text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-textPrimary text-sm border-2 border-white">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">{step.title}</h3>
              <p className="text-gray-600 px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};