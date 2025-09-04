import linkedinSvg from '../assets/svgs/in.svg'
import instagramSvg from '../assets/svgs/ig.svg'
import githubSvg from '../assets/svgs/gh.svg'
import xSvg from '../assets/svgs/x.svg'

const Footer = () => {
    return (
        <footer className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#contact" className="nav-link">Work With Me</a>
                    </div>
                    <div className="flex gap-4 mb-4 md:mb-0">
                        <a href="https://https://www.instagram.com/14.8hz" target='_blank' className="w-8 h-8  text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                            <img src={instagramSvg} alt="instagram icon links to sofiane's instagram" />
                        </a>
                        <a href="https://x.com/sofianemekki7" target='_blank' className="w-8 h-8  text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                            <img src={xSvg} alt="X icon links to sofiane's X" />
                        </a>
                        <a href="https://github.com/BelhiaSofiane" target='_blank' className="w-8 h-8  text-white rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-200">
                            <img src={githubSvg} alt="github icon links to sofiane's github" />
                        </a>
                        <a href="https://linkedin.com/in/sofiane-belhia" target='_blank' className="w-8 h-8  text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                            <img src={linkedinSvg} alt="linkedin icon links to sofiane's linkedin" />
                        </a>
                    </div>
                </div>
                <div className="text-center mt-8 text-sm text-gray-500">
                    <p>Powered by S.Belhia</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;