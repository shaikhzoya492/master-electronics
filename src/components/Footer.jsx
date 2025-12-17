import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#004a80] text-white pt-16 pb-8 px-6 md:px-20 font-poppins">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    
                    {/* Column 1: About Us */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold uppercase tracking-wider">About Us</h3>
                            <div className="h-1 w-12 bg-blue-400 mt-2"></div>
                        </div>
                        <p className="text-gray-200 text-sm leading-relaxed text-justify">
Since 2002, Master Electronics has provided Mumbai with expert appliance repairs, sales, and flexible rentals for ACs, TVs, and more. Our experienced technicians deliver fast, affordable, and reliable doorstep service using genuine spare parts. With over two decades of expertise, we are dedicated to ensuring 100% customer satisfaction for every home and office.                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold uppercase tracking-wider">Contact</h3>
                            <div className="h-1 w-12 bg-blue-400 mt-2"></div>
                        </div>
                        <ul className="space-y-4 text-gray-200">
                            <li className="flex items-center gap-3">
                                <span className="text-xl">📧</span>
                                <a href="mailto:connectmasterelectronics@gmail.com" className="hover:underline underline-offset-4">
                                    connectmasterelectronics@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-xl">📞</span>
                                <a href="tel:+919326680457" className="hover:text-blue-300 tracking-wide">(+91) 9326680457</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-xl">📞</span>
                                <a href="tel:+919322870243" className="hover:text-blue-300 tracking-wide">(+91) 9322870243</a>
                            </li>
                            <li className="flex items-start gap-3 mt-4">
                                <span className="text-xl mt-1">📍</span>
                                <p className="text-sm leading-relaxed">
                                    Shop No. 6 Hill view CHS. Bldg. 2A, MHADA Colony, 
                                    Poonam Nagar, Andheri East, Mumbai, Maharashtra 400093
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Links */}
                    <div className="space-y-2">
                        <div>
                            <h3 className="text-2xl font-bold uppercase tracking-wider">Links</h3>
                            <div className="h-1 w-12 bg-blue-400 mt-2"></div>
                        </div>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'About Us', 'Reviews', 'Contact Us'].map((link) => (
                                <li key={link} className="flex items-center gap-2 group">
                                    <span className="text-blue-400 font-bold group-hover:translate-x-1 transition-transform">›</span>
                                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-200 hover:text-white transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-400/30 pt-8 text-center">
                    <p className="text-gray-300 text-sm tracking-wide">
                        Copyright © 2025 Master Electronics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;