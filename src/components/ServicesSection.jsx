// Services Section
const ServicesSection = () => {
    const services = [
        { title: 'Responsive Website Development', description: 'Building modern, mobile-friendly, and fast websites with React & Tailwind CSS.', website: '#' },
        { title: 'Interactive & Engaging UI', description: 'Creating smooth animations, transitions, and interactive components with GSAP, Framer Motion, and React.', website: '#' },
        { title: '3D & Creative Web Experiences', description: 'Adding 3D models, product views, and immersive visuals using React Three Fiber & Three.js.', website: '#' }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-sm md:text-sm font-bold text-center mb-16 uppercase tracking-tight">Services</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <h3 className="text-2xl font-bold mb-4 font-basker">{service.title}</h3>
                            <p className="text-gray-500 mb-4">{service.description}</p>
                            {/* <button className="border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
                                <a href={service.website}>
                                    View Service
                                </a>
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;