import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-surfaceAlt relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-10 left-10 text-9xl font-serif text-gray-200 opacity-50 pointer-events-none">"</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Ils nous font confiance</h2>
          <p className="text-gray-600 text-lg">Découvrez ce que nos utilisateurs pensent de Profolib</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-card shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex mb-4 text-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-textPrimary text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};