import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', link: '#home' },
        { name: 'SERVICES', link: '#services' },
        { name: 'ABOUT US', link: '#aboutus' },
        { name: 'REVIEWS', link: '#reviews' },
        { name: 'CONTACT US', link: '#contactus' },
    ];

    return (
        <nav className=' bg-white shadow-md font-roboto'>
            <div className='max-w-7xl mx-auto pr-6 lg:px-20'>
                <div className='flex justify-between items-center h-20'>
                    
                    {/* Logo */}
                   <div className='flex items-center'>
    <a href="#home">
        {/* Changed <image> to <img> and ensured path is correct */}
        <img 
            className='w-49 h-49 xl:w-59 xl:h-59 object-contain' 
            src="Logo.png" 
            alt="Master Electronics Logo" 
        />
    </a>
</div>

                    {/* Desktop Menu */}
                    <ul className='hidden md:flex gap-8 font-semibold text-[#333333]'>
                        {navLinks.map((item) => (
                            <li key={item.name} className='hover:text-blue-600 cursor-pointer transition-colors'>
                                {/* Use an anchor tag here */}
                                <a href={item.link} className="block w-full h-full">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden flex items-center'>
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-[#333333] focus:outline-none'
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <ul className='flex flex-col gap-4 p-6 font-semibold text-[#333333]'>
                    {navLinks.map((item) => (
                        <li 
                            key={item.name} 
                            className='hover:text-blue-600 cursor-pointer'
                            onClick={() => setIsOpen(false)} 
                        >
                            {/* Use an anchor tag here as well */}
                            <a href={item.link} className="block w-full">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;