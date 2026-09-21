import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/Common/FloatingButtons';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WebDesignPage from './pages/WebDesignPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import WorkflowPage from './pages/WorkflowPage';
import BlogPage from './pages/BlogPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-[Montserrat,sans-serif]">
      {/* ========== HEADER & QUARTER MENU ========== */}
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* ========== MAIN CONTENT / PAGE ROUTER ========== */}
      <main className="relative z-10">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigateHome={() => handleNavigate('home')} />}
        {currentPage === 'thiet-ke-website' && <WebDesignPage onNavigateHome={() => handleNavigate('home')} />}
        {currentPage === 'da-thiet-ke' && <PortfolioPage onNavigateHome={() => handleNavigate('home')} />}
        {currentPage === 'dich-vu' && <ServicesPage onNavigateHome={() => handleNavigate('home')} />}
        {currentPage === 'quy-trinh' && <WorkflowPage onNavigateHome={() => handleNavigate('home')} />}
        {currentPage === 'blog' && <BlogPage onNavigateHome={() => handleNavigate('home')} />}
      </main>

      {/* ========== FOOTER ========== */}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />

      {/* ========== FLOATING CONTACT TOOLS ========== */}
      <FloatingButtons />
    </div>
  );
}

export default App;
