import React from 'react';

const TopBar = () => {
    
const whatsappLink = "https://wa.me/919322870243?text=Hello!%20I%20got%20your%20number%20from%20your%20website.%20I%20want%20to%20enquire:%20";
    return (
        <>
            <div className='flex justify-between items-center p-3 px-6 xl:px-20 bg-white'>
                
                <h1 className='text-sm sm:text-md md:text-lg xl:text-xl font-bold font-roboto text-gray-800'>
                    Call us: <a href="tel:+919326680457" className="hover:text-blue-600 transition-colors">+91 9326680457</a>
                </h1>

               
                <div className='flex items-center gap-2'>
                    <span className='hidden sm:block text-xs font-semibold text-gray-500 uppercase tracking-wider'>Chat with us</span>
                    <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='hover:scale-110 transition-transform duration-200'
                        title="Chat on WhatsApp"
                    >
                        <img 
                            src="https://img.icons8.com/color/48/whatsapp--v1.png" 
                            alt="WhatsApp" 
                            className='w-8 h-8 md:w-8 md:h-8 object-contain'
                        />
                    </a>
                </div>
            </div>
            <hr className='border-gray-200' />
        </>
    );
}

export default TopBar;
