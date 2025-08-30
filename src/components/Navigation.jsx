import { useState, useEffect, useRef } from "react";

const Navigation = ({ isScrolled }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : ''}`}>
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <a href="#" className="font-bold ">sofiane belhia</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => scrollToSection('projects')} className="nav-link text-sm uppercase tracking-wider">Projects</button>
                    <button onClick={() => scrollToSection('services')} className="nav-link text-sm uppercase tracking-wider">Services</button>
                    <button onClick={() => scrollToSection('recommendations')} className="nav-link text-sm uppercase tracking-wider">Recommendations</button>
                    <button onClick={() => scrollToSection('contact')} className="bg-black text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
                        Work With Me
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden"
                >
                    <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-black"></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="container mx-auto px-6 py-4">
                        <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-3 uppercase tracking-wider">Projects</button>
                        <button onClick={() => scrollToSection('services')} className="block w-full text-left py-3 uppercase tracking-wider">Services</button>
                        <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 uppercase tracking-wider">About</button>
                        <button onClick={() => scrollToSection('recommendations')} className="block w-full text-left py-3 uppercase tracking-wider">Recommendations</button>
                        <button 
                        onClick={() => scrollToSection('contact')} 
                        className="block w-full bg-black text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider mt-4">
                            Work With Me
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;