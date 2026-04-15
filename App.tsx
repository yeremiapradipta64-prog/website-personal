
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Biodata } from './pages/Biodata';
import { Film } from './pages/Film';
import { Contact } from './pages/Contact';
import { LoadingScreen } from './components/LoadingScreen';
import { AIAssistant } from './components/AIAssistant';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 800);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={handleNavigate} />;
      case 'biodata': return <Biodata />;
      case 'film': return <Film />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  const showLoader = isAppLoading || isTransitioning;

  return (
    <>
      {showLoader && <LoadingScreen />}
      
      <div className={`min-h-screen flex flex-col transition-all duration-1000 ${isAppLoading ? 'opacity-0 scale-105 overflow-hidden h-screen' : 'opacity-100 scale-100'}`}>
        <Navbar current={currentPage} onNavigate={handleNavigate} />
        <main className={`flex-grow transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderPage()}
        </main>
        <Footer onNavigate={handleNavigate} />
        <AIAssistant />
      </div>
    </>
  );
};

export default App;
