import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const ProjectsSection = () => {
    const projectsRef = useRef(null);
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        { 
            id: 1, 
            title: 'MediGuide', 
            number: '01', 
            color: 'bg-gradient-to-br from-purple-400 to-pink-400', 
            description: 'MediGuide is a medical app designed to help users seek medical assistance, receive advice, and securely store medical history all in a single place.' ,   
            demo: 0 , 
            githubRepo: 'https://github.com/BelhiaSofiane/MediGuide',
        },
        { 
            id: 2, 
            title: 'Quizzical', 
            number: '02', 
            color: 'bg-gradient-to-br from-blue-400 to-purple-400', 
            description: 'Quizzical is a dynamic quiz application built with React. It allows users to test their knowledge across various categories with fun, multiple-choice trivia questions. The quiz fetches real-time data from an external API and provides instant feedback on your answers.',
            demo: 'https://quizzical-wheat.vercel.app/',
            githubRepo: 'https://github.com/BelhiaSofiane/Quizzical', },
            
            { 
            id: 3, 
            title: 'Budgeting-App', 
            number: '03', 
            color: 'bg-gradient-to-br from-indigo-400 to-blue-400', 
            description: 'Budgeting-App is a modern, React-powered tool designed to streamline personal finance management with real-time feedback and intuitive navigation. Built with a focus on performance and modularity, it offers a comprehensive solution for tracking expenses, managing budgets, and providing a seamless user experience.'
            ,demo: 'https://budgeting-app-vdjn.onrender.com',
            githubRepo: 'https://github.com/BelhiaSofiane/Budgeting-App',
        }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            projects.forEach((project, index) => {
                gsap.from(`.project-${index}`, {
                    y: 80,
                    opacity: 0.5,
                    ease: 'power3.out',
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: `.project-${index}`,
                        scrub: 1
                    }
                });
            });
        }, projectsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={projectsRef} className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-sm md:text-sm text-center mb-16 uppercase tracking-tight font-bold">Projects</h2>

                <div className="space-y-8 md:space-y-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-${index} project-card group relative`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{
                                opacity: hoveredProject && hoveredProject !== project.id ? 0.3 : 1
                            }}
                        >
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                                <div className="flex-1">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-500">{project.description}</p>
                                </div>
                                <div className='flex flex-row gap-2 text-center md:flex-col md:w-48 md:h-48  rounded-2xl transform group-hover:scale-105 transition-transform duration-500'>
                                    {project.demo ? (
                                         <a 
                                        href={project.demo}
                                        target="_blank"
                                        className="bg-black  text-white px-8 py-4 rounded-2xl text-lg uppercase tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors transform hover:scale-110 transition-transform duration-300">
                                            Live Demo
                                        </a>
                                        ) : (
                                        <span className="inline-block px-4 py-2 bg-gray-400 cursor-not-allowed text-white px-8 py-4 rounded-2xl text-lg uppercase tracking-wider
                                        ">
                                            Work in progress...
                                        </span>
                                        )}
                                   
                                    <a 
                                    href={project.githubRepo}
                                    className="bg-black text-white px-8 py-4 rounded-2xl text-lg uppercase tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors transform hover:scale-110 transition-transform duration-300">
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
