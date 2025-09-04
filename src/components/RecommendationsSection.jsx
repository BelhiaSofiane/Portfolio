import  moh  from "../assets/images/moh.jpg"
import  ismail  from "../assets/images/ismail.jpg"
import  zaki  from "../assets/images/zaki.jpg"
import linkedinSvg from '../assets/svgs/in.svg'


// Recommendations Section
const RecommendationsSection = () => {

    const testimonials = [
        {
            id: 1,
            name: 'Hachemi Mohamed Amime',
            job: "backend developer",
            number: '01',
            Linkedin: 'https://dz.linkedin.com/in/amiinehachemi',
            img: `${moh}`,
            testimonial: "“I’ve known Sofiane both personally and professionally, and I can confidently say he has a natural talent for web development. His curiosity, dedication, and eye for detail make him a reliable developer to work with. I’m sure any team would benefit from having him on board.”"
        },
        {
            id: 2,
            name: 'Zakaria Belhaoua',
            job: "UX/UI Designer",
            number: '02',
            Linkedin: 'https://www.linkedin.com/in/zakaria-belhaoua/',
            img: `${zaki}`,
            testimonial: "“Collaborating with Sofiane has been a great experience. He combines strong front-end skills with a real user-centered mindset, which makes working together smooth and productive. His openness to feedback and passion for creating intuitive solutions really stand out”"
        },
    ];

    //     {
    //         id: 3,
    //         name: 'Ismail Bentabet',
    //         job: "frontend developer",
    //         number: '03',
    //         Linkedin: 'https://dz.linkedin.com/in/ismailbentabett',
    //         img: `${ismail}`,
    //         testimonial: "“I had the chance to connect with Sofiane recently, and I was impressed by his motivation and curiosity in web development. He’s proactive about learning, asks the right questions, and shows a clear passion for building clean, user-friendly interfaces. With his dedication, I’m confident he’ll grow quickly in the tech industry.”"
    //     },

        
    return (
        <section id="recommendations" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-sm md:text-sm font-bold text-center mb-8 uppercase tracking-tight">Recommendations</h2>
                <p className="text-center text-xl mb-16 max-w-3xl mx-auto">
                    friends who have worked with me
                </p>
                {
                    testimonials.map((testimonial, index) => (
                        <div className="max-w-xl mx-auto" key={index}>
                            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full tansform hover:scale-110 transition-transform duration-200 ease-in-out flex-shrink-0">
                                        <img src={testimonial.img} alt="User Avatar" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold ">{testimonial.name} • {testimonial.job}.  
                                            <a href={testimonial.Linkedin}>
                                                <img src={linkedinSvg} className="w-4 h-4 ml-2 inline-block transform hover:scale-110 transition-transform duration-200 ease-in-out" />
                                            </a>
                                        </p>
                                        <p className="text-sm text-gray-500">{testimonial.testimonial}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    );
};

export default RecommendationsSection;