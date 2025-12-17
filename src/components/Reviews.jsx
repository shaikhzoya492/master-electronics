import React, { useEffect, useState, useRef } from "react";

// Reuse the CountUp logic for the trust stats
const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.5 });
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

    return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const Reviews = () => {
    const testimonials = [
        {
            name: "Rajat Govind",
            text: "Used their washing machine and AC for a year. Although I did face a few problems with the machines Mr Ali was always ready to help. The items were affordable as well.",
            stars: 5
        },
        {
            name: "Shafeeq Khan",
            text: "Service is very fast and good quality of products. Highly recommended for anyone looking for reliable repairs in Mumbai.",
            stars: 5
        }
    ];

    const trustPoints = [
        {
            title: "Appliances Repaired",
            value: 10000,
            suffix: "+",
            desc: "From ACs to TVs, fixed it all with satisfied customers."
        },
        {
            title: "Years of Expertise",
            value: 23,
            suffix: "+",
            desc: "Trusted since 2002 in appliance repair, sales & rentals."
        }
    ];

    return (
        <section className="bg-white py-16 px-6">
            <div className="container mx-auto">
                
                {/* --- WHY CHOOSE US SECTION --- */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-roboto text-gray-800 mb-4">Why Choose Master Electronics</h2>
                    <hr className="border-[#155dfc] border-2 w-20 mx-auto mb-10" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Stat 1 */}
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-4xl font-bold text-[#155dfc] mb-2">
                                <CountUp end={10000} />+
                            </h3>
                            <p className="font-bold text-gray-800 mb-2 text-lg">Appliances Repaired</p>
                            <p className="text-gray-600 text-sm">From ACs to TVs, fixed it all with satisfied customers.</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-4xl font-bold text-[#155dfc] mb-2">
                                <CountUp end={23} />+
                            </h3>
                            <p className="font-bold text-gray-800 mb-2 text-lg">Years of Expertise</p>
                            <p className="text-gray-600 text-sm">Trusted since 2002 in appliance repair, sales & rentals.</p>
                        </div>

                        {/* Point 3 */}
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-[#155dfc] mb-2 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <p className="font-bold text-gray-800 mb-2 text-lg">Located in Andheri</p>
                            <p className="text-gray-600 text-sm">Easy access with quick home service available near you in Mumbai.</p>
                        </div>

                        {/* Point 4 */}
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-[#155dfc] mb-2 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="font-bold text-gray-800 mb-2 text-lg">Complete Solutions</p>
                            <p className="text-gray-600 text-sm">Repair, refurbished sales & rentals — all under one roof.</p>
                        </div>
                    </div>
                </div>

                {/* --- CUSTOMER REVIEWS SECTION --- */}
                <div className="bg-[#155dfc] rounded-3xl  p-10 md:p-16 text-white">
                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-roboto text-center">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((review, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md p-2 xl:p-8 rounded-2xl border border-white/20">
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="italic mb-6 text-md xl:text-lg">"{review.text}"</p>
                                <p className="font-bold border-t border-white/20 pt-4">— {review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reviews;