import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const HeroSection = () => {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-text', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out'
            });

            gsap.from('.hero-subtitle', {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.5
            });

            gsap.from('.floating-shape', {
                scale: 0,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                delay: 0.8,
                ease: 'back.out(1.7)'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="floating-shape absolute top-20 right-20 w-96 h-96 gradient-bg rounded-full"></div>
                <div className="floating-shape absolute bottom-20 left-20 w-64 h-64 gradient-bg rounded-full" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-8">
                    <p className="hero-subtitle text-sm uppercase tracking-widest mb-8">Web Developer | HTML | CSS | JavaScript | React.</p>
                </div>
                <div className="text-center">
                    <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl uppercase mb-4">
                        Sofiane Belhia
                    </h1>
                    <div className="hero-text text-6xl md:text-8xl lg:text-9xl uppercase flex items-center justify-center gap-8">
                        <span className="hidden md:inline">—</span>
                        <span>Web Dev</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;