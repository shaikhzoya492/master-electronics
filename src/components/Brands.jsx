import React from "react";

const Brands = () => {
    const logos = [
        { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/6/61/Samsung_old_logo_before_year_2015.svg", altText: "Authorized Samsung AC and Fridge repair service expert" },
        { name: "LG", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/LG_Electronics_Logo_%28modern%29.svg", altText: "LG washing machine and refrigerator maintenance specialist" },
        { name: "Panasonic", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Panasonic_logo.svg", altText: "Panasonic air conditioner and smart TV repair service" },
        { name: "Sony", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" , altText: "Sony LED TV screen repair and panel replacement service" },
        { name: "Whirlpool", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Whirlpool_Corporation_Logo_%28as_of_2017%29.svg" , altText: "Whirlpool washing machine and fridge technician" },
        { name: "Haier", url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Haier_logo.svg" , altText: "Haier refrigerator gas charging and AC service" },
        { name: "Bosch", url: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg", altText: "Bosch front load washing machine repair and service" },
        { name: "TCL", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Logo_of_the_TCL_Corporation.svg" , altText: "TCL Android TV and home appliance repair expert" },
    ];

    return (
        <div className="py-2 md:py-3 bg-gray-50 border-y border-gray-200 shadow-4xl border">
            {/* Responsive Header */}
            <div className="text-center mb-6 md:mb-8 px-4 ">
                <h3 className="text-xs md:text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
                    Service Experts
                </h3>
               
            </div>
            
            {/* Responsive Slider Container */}
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                
                {/* Note: Adjust 'animate-infinite-scroll' speed in tailwind.config 
                    Mobile often feels better with a slower scroll (~40s) vs Desktop (~25s)
                */}
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 md:[&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll mb-6">
                    {logos.map((logo, index) => (
                        <li key={index}>
                            <img 
                                src={logo.url} 
                                alt={logo.name} 
                                // Smaller height on mobile (h-6 or h-8)
                                className="h-6 md:h-12 lg:h-14 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
                            />
                        </li>
                    ))}
                </ul>
                
                {/* Duplicate List for Loop */}
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 md:[&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {logos.map((logo, index) => (
                        <li key={`dup-${index}`}>
                            <img 
                                src={logo.url} 
                                alt={logo.name} 
                                className="h-6 md:h-12 lg:h-14 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Brands;