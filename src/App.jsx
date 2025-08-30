import { useState, useRef } from 'react'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import RecommendationsSection from './components/RecommendationsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation isScrolled={isScrolled} />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <RecommendationsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App
