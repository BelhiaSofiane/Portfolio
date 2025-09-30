import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const formRef = useRef(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)


    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((res) => {
                alert("Email Sent, I'll get back to you as soon as possible!")
                formRef.current.reset()
                setForm({ name: "", email: "", message: "" })
            }, (error) => {
                console.error("Email failed")
                alert("Email Failed to send. Try again later.")
            }
            )
    };

    const isFormIncomplete = !form.name.trim() || !form.email.trim() || !form.message.trim() || !isValidEmail(form.email)

    return (
        <div className="flex items-center justify-center p-4">
            <form
                ref={formRef}
                className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8 space-y-6"
            >
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-black">Get In Touch</h2>
                    <p className="text-gray-600 text-sm">
                        Email will be sent to <span className="font-medium text-black">sofianemekkibelhia@gmail.com</span>
                    </p>
                </div>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-black">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-black placeholder-gray-500 focus:border-black focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all duration-200 hover:border-gray-400"
                            placeholder="Enter your full name"
                            required
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-black">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-black placeholder-gray-500 focus:border-black focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all duration-200 hover:border-gray-400"
                            placeholder="your.email@example.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:border-gray-500 focus:ring-2 focus:outline-none transition-all duration-200 hover:border-slate-300 resize-none"
                            placeholder="Tell me about your project or just say hello..."
                            required
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {
                    !isFormIncomplete
                        ? <button
                            type="submit"
                            onClick={sendEmail}
                            className="w-full self-center bg-black text-white px-8 py-4 rounded-full text-lg uppercase tracking-wider hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors transform hover:scale-110 transition-transform duration-300"
                        >
                            Send Message
                        </button>
                        : <button
                            disabled
                            className="w-full self-center bg-gray-400 text-gray-200 px-8 py-4 rounded-full text-lg uppercase tracking-wider cursor-not-allowed transform hover:scale-110 transition-transform duration-300"
                        >
                            Send Message
                        </button>

                }


                <p className="text-xs text-slate-500 text-center mt-4">
                    I'll get back to you as soon as possible!
                </p>
            </form>
        </div>
    );
}