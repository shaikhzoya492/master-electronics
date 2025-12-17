import React, { useEffect, useState, useRef } from "react";

const Contact = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const sectionRef = useRef(null);

    // Scroll reveal logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="bg-gray-100 py-16 px-4 md:px-8 overflow-hidden">
            <div className="container mx-auto" ref={sectionRef}>
                <div className={`transition-all duration-1000 ease-out ${
                    isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <hr className="border-[#155dfc] border-2 w-20 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        
                        {/* --- Contact Details --- */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm space-y-8">
                            
                            {/* Contact Info */}
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-xl text-[#155dfc]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 l:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="text-sm xl:text-xl" >
                                    <h3 className="text-sm xl:text-xl font-bold text-gray-800 mb-1">Contact</h3>
                                    <p className="text-gray-600">Mobile: <a href="tel:+919326680457" className="hover:text-[#155dfc] font-medium transition-colors">(+91) 9326680457</a></p>
                                    <p className="text-gray-600 ">Email: <a href="mailto:connectmasterelectronics@gmail.com" className="hover:text-[#155dfc] font-medium transition-colors ">connectmasterelectronics@gmail.com</a></p>
                                </div>
                            </div>

                            {/* Address Info */}
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-xl text-[#155dfc]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm xl:text-xl font-bold text-gray-800 mb-1">Address</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm xl:text-xl">
                                        Shop No. 6 Hill view CHS. Bldg. 2A, MHADA Colony, <br />
                                        Poonam Nagar, Andheri East, Mumbai, Maharashtra 400093
                                    </p>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-xl text-[#155dfc]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm xl:text-xl font-bold text-gray-800 mb-1">Office Hours</h3>
                                    <p className="text-gray-600 font-medium text-sm xl:text-xl">Mon – Sun: 10:00 am – 9:00 pm</p>
                                </div>
                            </div>

                        </div>

                        {/* --- Google Map Section --- */}
                      <div className="h-[450px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
    <iframe 
        title="Master Electronic Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.387693498912!2d72.86822599999999!3d19.1344995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b76b99ef739f%3A0x41140d4a8b371581!2sMaster%20Electronic!5e0!3m2!1sen!2sin!4v1765958556615!5m2!1sen!2sin " 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;