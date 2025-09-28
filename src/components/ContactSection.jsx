// Contact Section

import ContactForm from "./ContactForm";
import { useState, useRef } from "react";
const ContactSection = () => {
    const [toggleForm, setToggleForm] = useState(false);

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-12">Let's work together</h2>
                <div className="flex justify-center flex-col  gap-4 ">
                    <a
                        href="https://drive.google.com/file/d/1PXiweEaHNxsZdb6UqZPVdSl_eiN-PUH3/view?usp=sharing"
                        target="_blank"
                        className="self-center bg-black text-white px-8 py-4 rounded-full text-lg uppercase tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors transform hover:scale-110 transition-transform duration-300">
                        Click to view my Resume
                    </a>
                    <button 
                    onClick={() => setToggleForm(!toggleForm)}
                    className="self-center bg-black text-white px-8 py-4 rounded-full text-lg uppercase tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors transform hover:scale-110 transition-transform duration-300">
                        Work With Me
                    </button>
                </div>
            </div>
            {toggleForm && <ContactForm />}
        </section>
    );
};

export default ContactSection;
