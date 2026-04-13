import React from 'react';
import { Check, BookOpen, Bell } from 'lucide-react';
import { Button } from './Button';

export const InstantConnectionDemo: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: For Students */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wide mb-4">
              Pour les élèves
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary mb-6 leading-tight">
              Une aide immédiate <br/>
              <span className="text-primary">quand vous en avez besoin</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Fini les blocages sur les devoirs. Avec Profolib, un professeur est toujours disponible pour vous débloquer et vous expliquer ce que vous ne comprenez pas.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Professeurs disponibles 7j/7",
                "Toutes les matières du collège au supérieur",
                "Cours en visio HD avec partage d'écran",
                "Historique de vos cours accessible"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup Student (Simple Card Version) */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2 perspective-1000">
             <div className="bg-white rounded-[2rem] shadow-2xl p-8 border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto lg:mx-0">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary shrink-0">
                    <BookOpen size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Je suis élève</div>
                    <div className="text-xl font-bold text-textPrimary">Nouvelle demande</div>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Matière</label>
                    <div className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-textPrimary font-medium">
                      Mathématiques
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Niveau</label>
                    <div className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-textPrimary font-medium">
                      Terminale
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Besoin</label>
                    <div className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-textPrimary text-sm leading-relaxed h-24 flex items-start">
                      <span className="mt-1">Je ne comprends pas les intégrales...</span>
                    </div>
                  </div>

                  <Button fullWidth size="lg" className="mt-4 shadow-xl shadow-blue-500/20 rounded-full py-4 text-base">
                    Trouver un professeur
                  </Button>

                </div>
              </div>
          </div>
        </div>

        {/* Section 2: For Teachers */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
           {/* Mockup Teacher */}
           <div className="lg:w-1/2 w-full perspective-1000 relative">
             <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-40"></div>
             <div className="bg-primary rounded-[2rem] p-6 md:p-8 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 relative z-10 text-white">
                
                {/* Notification Card */}
                <div className="bg-white text-textPrimary rounded-2xl p-6 shadow-lg animate-fade-in-up">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      En ligne
                    </div>
                    <span className="text-xs text-gray-400">Il y a 2s</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    Nouvelle demande !
                    <Bell size={20} className="text-accent fill-accent" />
                  </h3>
                  
                  <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-xs">L</div>
                      <div>
                        <div className="font-bold text-sm">Lucas</div>
                        <div className="text-xs text-gray-500">Terminale - Mathématiques</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic">"Besoin d'aide sur les intégrales par parties..."</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="col-span-1 py-3 rounded-xl border border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50">
                      Ignorer
                    </button>
                    <button className="col-span-1 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-500/20">
                      Accepter le cours
                    </button>
                  </div>
                </div>

             </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wide mb-4">
              Pour les professeurs
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary mb-6 leading-tight">
              Enseignez <br/>
              <span className="text-accent">quand vous le souhaitez</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Mettez votre expertise au service des élèves en difficulté. Choisissez vos horaires et aidez ceux qui en ont besoin, depuis chez vous.
            </p>
             <ul className="space-y-4 mb-8">
              {[
                "Flexibilité totale sur vos disponibilités",
                "Rémunération attractive (à venir)",
                "Interface simple et intuitive",
                "Support technique disponible"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3 text-yellow-700 shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};