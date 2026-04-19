import React from 'react';
import { Button } from './Button';
import { ArrowRight, Users, Clock, Smile, GraduationCap, BookOpen, Pencil } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
      {/* Background Grid Pattern - Lighter */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      {/* Floating 3D-like Elements (Lucide Icons) */}
      <div className="hidden md:block absolute top-20 left-[10%] opacity-90 pointer-events-none animate-float-slow z-0">
        <div className="relative bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,238,0.15)] border border-blue-50 transform -rotate-12 transition-transform hover:rotate-0 hover:scale-110 duration-500">
           <GraduationCap size={56} className="text-primary fill-blue-50" strokeWidth={1.5} />
           {/* Glow effect */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-2xl -z-10 rounded-full"></div>
        </div>
      </div>

      <div className="hidden md:block absolute top-32 right-[8%] opacity-90 pointer-events-none animate-float-medium z-0">
        <div className="relative bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(255,216,111,0.25)] border border-yellow-50 transform rotate-12 transition-transform hover:rotate-0 hover:scale-110 duration-500">
           <BookOpen size={48} className="text-accent fill-yellow-50" strokeWidth={1.5} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-2xl -z-10 rounded-full"></div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-40 left-[15%] opacity-70 pointer-events-none animate-float-fast z-0">
         <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-gray-50 transform rotate-6">
           <Pencil size={32} className="text-gray-400 fill-gray-50" strokeWidth={1.5} />
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float 7s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-fast {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-primary font-semibold text-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Cours particuliers nouvelle génération
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-textPrimary tracking-tight mb-6 leading-tight">
          Besoin d'aide ? <br />
          <span className="text-primary relative inline-block">
             Un prof en quelques minutes
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
          Connectez-vous instantanément avec un professeur disponible pour un cours en visio. Aide immédiate, résultats concrets.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="https://app.profolib.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="w-full h-14 px-8 text-lg shadow-xl shadow-blue-500/20">
              Trouver un professeur
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="https://app.profolib.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full h-14 px-8 text-lg hover:bg-gray-50">
              <GraduationCap className="mr-2 w-5 h-5" />
              Donner des cours
            </Button>
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-10">
          <div className="flex flex-col items-center p-4">
            <div className="text-4xl font-extrabold text-textPrimary mb-2 flex items-center">
              500<span className="text-primary">+</span>
            </div>
            <div className="flex items-center text-gray-500 font-medium">
              <Users size={18} className="mr-2 text-accent" />
              Professeurs
            </div>
          </div>
          
          <div className="flex flex-col items-center p-4">
            <div className="text-4xl font-extrabold text-textPrimary mb-2">
              5<span className="text-sm font-bold text-gray-400 ml-1">min</span>
            </div>
            <div className="flex items-center text-gray-500 font-medium">
              <Clock size={18} className="mr-2 text-accent" />
              Temps moyen
            </div>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="text-4xl font-extrabold text-textPrimary mb-2">
              98<span className="text-sm font-bold text-gray-400 ml-1">%</span>
            </div>
            <div className="flex items-center text-gray-500 font-medium">
              <Smile size={18} className="mr-2 text-accent" />
              Satisfaction
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};