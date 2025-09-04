// About Section
import linkedinSvg from '../assets/svgs/in.svg'
import githubSvg from '../assets/svgs/gh.svg'
import instagramSvg from '../assets/svgs/ig.svg'
import xSvg from '../assets/svgs/x.svg'
import locationSvg from '../assets/svgs/location.svg'

import profilePic from '../assets/images/image.png'


const AboutSection = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3">
                        <div className="w-64 h-64 mx-auto rounded-2xl shadow-2xl">
                            <img
                                className="w-64 h-64  mx-auto rounded-2xl shadow-2xl object-cover hover:scale-110 hover:-rotate-6 transition-transform duration-200 ease-in-out"
                                src={profilePic}
                                alt="sofiane's ghibli ai generated picture" />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-basker">Meet sofiane</h2>
                        <p className="text-lg uppercase tracking-wider mb-6 font-semibold">Frontend Engineer • Web Developer</p>
                        <p className="text-gray-600 text-lg mb-6">Front-end developer with hands-on experience building responsive web applications using modern technologies including React, JavaScript, and CSS frameworks. Proven ability to create user-friendly interfaces with strong attention to detail. Passionate about continuous learning and staying current with industry best practices. Experience with version control, API integration, and responsive design principles. </p>
                        <p className="text-sm uppercase tracking-wider mb-6 flex items-center gap-1">
                            <a
                                href="https://www.google.com/maps/place/Sa%C3%AFda/@34.8478796,0.0620833,12z/data=!3m1!4b1!4m6!3m5!1s0x1280178861cd9055:0xa79d79331eb57fc4!8m2!3d34.8381764!4d0.1481254!16zL20vMDVsNnYz?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                                target='_blank'
                                className="w-6 h-6 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 ease-in-out">
                                <img src={locationSvg} alt="location icon" />
                            </a>
                            Saida, Algeria
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/sofiane-belhia" target='_blank' 
                            className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:scale-135 transition-transform duration-200 ease-in-out">
                                <img src={linkedinSvg} alt="linkedin icon links to sofiane's linkedin" />
                            </a>
                            <a href="https://github.com/BelhiaSofiane"
                                target='_blank' 
                                className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:scale-135 transition-transform duration-200 ease-in-out">
                                <img src={githubSvg} alt="instagram icon links to sofiane's github" />
                            </a>
                            <a 
                            href="https://https://www.instagram.com/14.8hz" 
                            target='_blank' 
                            className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:scale-135 transition-transform duration-200 ease-in-out">
                                <img src={instagramSvg} alt="instagram icon links to sofiane's instagram" />
                            </a>
                            <a 
                            href="https://x.com/sofianemekki7" 
                            target='_blank' 
                            className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:scale-135 transition-transform duration-200 ease-in-out">
                                <img src={xSvg} alt="X icon links to sofiane's X" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
