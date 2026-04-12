import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstantConnectionDemo } from './components/InstantConnectionDemo';
import { DashboardPreview } from './components/DashboardPreview';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <InstantConnectionDemo />
        <DashboardPreview />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;