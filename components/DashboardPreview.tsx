import React from 'react';
import { Button } from './Button';
import { TrendingUp, Calendar, Bell, User } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Swirl SVG */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-30 text-white/20">
         <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            <path d="M-100 800 C 200 400, 600 900, 1540 200" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10"/>
            <circle cx="1200" cy="300" r="20" fill="currentColor" className="animate-bounce" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight font-sans">
              Gardez le cap sur <br/>
              <span className="text-accent">votre réussite scolaire</span>
            </h2>
            <p className="text-blue-50 text-lg mb-8 leading-relaxed font-medium opacity-90">
              Dites adieu aux échanges dispersés. Avec <strong>Profolib</strong>, gérez vos cours, consultez votre agenda et mesurez votre progression depuis une interface unique. L'organisation ne sera plus jamais un obstacle à votre réussite.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-16">
              <a href="https://app.profolib.fr">
                <Button variant="secondary" size="lg" className="shadow-xl shadow-yellow-500/20">
                  Créer mon compte
                </Button>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-gray-200 flex items-center justify-center overflow-hidden">
                     <img src="https://i.pravatar.cc/100?img=33" alt="User" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-gray-200 flex items-center justify-center overflow-hidden">
                     <img src="https://i.pravatar.cc/100?img=11" alt="User" />
                  </div>
                   <div className="w-10 h-10 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center font-bold text-xs relative z-10">
                     +2k
                  </div>
                </div>
                <span className="text-sm font-semibold">élèves nous ont rejoints</span>
              </div>
            </div>

            {/* Stats Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-4xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Satisfaction</div>
                <div className="text-xs text-blue-200">Note moyenne des avis clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Réussite</div>
                <div className="text-xs text-blue-200">Taux d'obtention du brevet/bac</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">2.5x</div>
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Rapidité</div>
                <div className="text-xs text-blue-200">Progression accélérée constatée</div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup - 3D Effect */}
          <div className="lg:w-1/2 w-full perspective-1000 group">
            <div 
              className="bg-white rounded-[2rem] p-6 shadow-2xl transition-all duration-700 ease-out transform group-hover:rotate-0"
              style={{ transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)' }}
            >
              
              {/* Fake Browser/App Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
                   <span className="text-sm font-bold text-textPrimary flex items-center gap-2">
                     <User size={16} className="text-primary"/> Espace Élève
                   </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-50 rounded-full relative">
                    <Bell size={16} className="text-gray-400" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    TH
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-12 gap-4">
                
                {/* Header Welcome */}
                <div className="col-span-12 mb-2">
                  <h3 className="text-2xl font-bold text-textPrimary">Bon retour, Thomas ! 👋</h3>
                  <p className="text-gray-500 text-sm">Vous avez 2 cours prévus cette semaine.</p>
                </div>

                {/* Card: Next Lesson */}
                <div className="col-span-12 md:col-span-7 bg-surfaceAlt rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-white p-2 rounded-xl shadow-sm">
                      <Calendar size={20} className="text-primary" />
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">Confirmé</span>
                  </div>
                  <h4 className="font-bold text-textPrimary mb-1">Mathématiques (Algèbre)</h4>
                  <p className="text-sm text-gray-500 mb-4">Mardi 24 Oct • 17:30 - 18:30</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                       <img src="https://i.pravatar.cc/100?img=12" alt="Prof" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Avec Prof. Martin</span>
                  </div>
                </div>

                {/* Card: Progress */}
                <div className="col-span-12 md:col-span-5 bg-primary text-white rounded-2xl p-5 flex flex-col justify-between shadow-lg shadow-blue-500/30">
                  <div className="flex justify-between items-start">
                     <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                        <TrendingUp size={20} className="text-white" />
                     </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">15.5</div>
                    <div className="text-xs text-blue-100 mb-2">Moyenne générale</div>
                    <div className="w-full bg-blue-900/30 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-accent h-full w-[78%]"></div>
                    </div>
                  </div>
                </div>

                {/* Card: Quick Actions / Messages */}
                <div className="col-span-12 bg-white border border-gray-100 rounded-2xl p-5 shadow-soft">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-sm text-gray-800">Derniers messages</h4>
                    <span className="text-xs text-primary font-bold cursor-pointer hover:underline">Voir tout</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold text-xs">J</div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-bold text-textPrimary">Julie (Anglais)</span>
                          <span className="text-xs text-gray-400">10:42</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate">Hello Thomas, n'oublie pas de revoir les verbes...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                     <span className="text-xs font-semibold text-gray-400 uppercase">Tags:</span>
                     <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-[10px] font-bold">Devoirs</span>
                     <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold">Planning</span>
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