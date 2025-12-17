import React from "react";

const Home = () => {
    return (
        <div className="relative w-full bg-[url('/homebg.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden mb-4">
            
            <div className="flex flex-col md:flex-row justify-between items-center w-full min-h-[80vh] px-6 md:px-20 py-10 bg-linear-to-t xl:bg-linear-to-l from-blue-600 to-transparent">
                
           
                <div className="text-white font-sans text-center md:text-left md:max-w-2xl animate-slide-left">
                    <h1 className="text-white font-bold font-sans text-4xl md:text-6xl mb-4 leading-tight">
                        WE OFFER SAME <br className="hidden md:block"/> DAY SERVICE.
                    </h1>
                    
                    <hr className="mb-5 border-2 border-blue-600 w-20 mx-auto md:mx-0"/>
                    
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 block ">
                        Expert Repairs | Flexible Rentals | Same Day Service
                    </h2>
                    
                    <p className="text-base md:text-lg mb-8 opacity-90 max-w-xl mx-auto md:mx-0">
                        Don’t let a broken appliance disrupt your day. Whether you need a professional fix or a reliable rental to get you through, we deliver high-quality home solutions at your doorstep.
                    </p>
                    
                    <div className="flex justify-center md:justify-start">
                        <a href="tel:+919326680457" className=" bg-red-700 xl:bg-red-900 px-10 py-4 rounded-full font-bold font-roboto hover:bg-red-500 transition-all shadow-lg hover:scale-105 inline-block text-center">
                            CALL NOW
                        </a>
                    </div>
                </div>

               
                <div className="mt-4 md:mt-2 w-full md:w-1/2 flex justify-center md:justify-end animate-slide-right overflow-visible">
                    <img 
                        className="w-[120%] sm:w-[80%] md:w-full max-w-600px md:max-w-800px lg:max-w-1100px xl:max-w-1200px h-auto drop-shadow-2xl object-contain scale-110 sm:scale-100 md:scale-110 lg:scale-125 origin-center" 
                        src='repair.png' 
                        alt="Repair Man"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
