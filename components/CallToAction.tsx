import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent opacity-20 rounded-full translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Prêt à commencer ?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Rejoignez la communauté Profolib et transformez votre façon d'apprendre ou d'enseigner.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://app.profolib.fr" className="w-full sm:w-auto inline-block">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold h-14 px-8">
              Créer mon compte gratuitement
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};