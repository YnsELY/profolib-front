import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="advantages" className="py-20 bg-surfaceAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Pourquoi nous choisir ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Les avantages EduConnect : une expérience d'apprentissage repensée pour vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-card shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                <feature.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};