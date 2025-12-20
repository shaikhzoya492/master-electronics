import React, { useEffect, useState, useRef } from "react";

// --- Internal Helper Component for Animated Numbers ---
const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );
        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return <span ref={countRef}>{count}</span>;
};

// --- Main About Component ---
const About = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const sectionRef = useRef(null);

    // Logic for Fade-in on Scroll
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
        <section className="bg-gray-100 py-10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6" ref={sectionRef}>
                {/* Reveal Animation Wrapper */}
                <div className={`flex flex-col items-center p-6 md:p-12 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-1000 ease-out ${
                    isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
                    
                    {/* Header */}
                    <h2 className="text-3xl md:text-5xl mb-2 font-bold font-roboto text-gray-800">
                        About Us
                    </h2>
                    <hr className="border-[#155dfc] border-2 w-16 mb-10" />

                    {/* Content Wrapper */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                        
                        {/* Text Content */}
                        <div className="text-base md:text-lg font-poppins text-gray-700 leading-relaxed lg:w-1/2">
                            <p className="mb-4 text-justify">
                                <span className="font-bold text-[#155dfc]">Established in 2002</span>, Master Electronics has been a trusted name for home appliance repair, sales, and rentals in Mumbai. We provide expert AC repair, fridge service, washing machine repair, microwave oven repair, and LED/LCD TV repair.
                            </p>
                            <p className="mb-4 text-justify">
                                We specialize in TVs and inverter ACs, offering flexible rental options for ACs, washing machines, and fridges to meet the needs of homes, offices, and events across the city.
                            </p>
                            <p className="text-justify">
                                Our experienced technicians ensure fast, reliable, and affordable service near you, using genuine spare parts and professional support. With over <span className="font-bold">two decades of experience</span>, we are committed to delivering 100% customer satisfaction.
                            </p>
                            
                            {/* Animated Stats for Trust */}
                            <div className="flex gap-10 mt-8 border-t pt-6 justify-center md:justify-start">
                                <div>
                                    <p className="text-3xl font-bold text-[#155dfc]">
                                        <CountUp end={23} />+
                                    </p>
                                    <p className="text-sm text-gray-500 uppercase font-semibold">Years Exp</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#155dfc]">
                                        <CountUp end={100} />%
                                    </p>
                                    <p className="text-sm text-gray-500 uppercase font-semibold">Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative">
                                {/* Decorative background element */}
                                <div className="hidden md:block absolute -top-4 -left-4 w-full h-full border-2 border-[#155dfc] rounded-lg"></div>
                                <img 
                                    className="relative z-10 w-full max-w-[500px] h-auto rounded-lg shadow-2xl object-cover" 
                                    src='soldering-a-TV-motherboard.jpg' 
                                    alt="Technician soldering a TV motherboard for repair"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;