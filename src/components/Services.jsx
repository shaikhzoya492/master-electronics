import React from "react";

const Services = () => {
    const provides = [
        { url: "https://img.icons8.com/ios/100/155dfc/air-conditioner.png",altText: 'Split and window AC gas charging, installation, and compressor repair service in Mumbai', title: 'AC Repair & Installation in Mumbai', description: 'Solving AC not cooling and compressor issues. We provide split AC service, HVAC air filter replacement, and professional AC gas charging. Expert AC troubleshooting to reset air conditioners blowing warm air.' },
        { url: "https://img.icons8.com/ios/100/155dfc/fridge.png",altText: 'Double door refrigerator gas filling, leaking repair, and compressor replacement specialist in Andheri', title: 'Fridge / Refrigerator Repair', description: 'Expert fixing for fridge leaking water inside, gas filling for fridge, and compressor replacement. We resolve issues like Samsung refrigerator not cooling or water dripping.' },
        { url: "https://img.icons8.com/ios/100/155dfc/washing-machine.png", altText: 'Automatic washing machine drum repair, PCB service, and motor troubleshooting for LG and Whirlpool', title: 'Washing Machine Repair', description: 'Fixing Whirlpool washer won\'t spin, LG washer repair cost estimates, and front load washing machine repair. Expert PCB repair for washing machine motor or drum issues.' },
        { url: "https://img.icons8.com/ios/100/155dfc/microwave.png",altText: 'Microwave magnetron repair, sparking fix, and convection oven heating element replacement', title: 'Microwave Oven Repair', description: 'Expert microwave repair for magnetron sparking, touch panel issues, or microwave not heating. We fix display errors and power surges in all convection and grill models.' },
        { url: "https://img.icons8.com/ios/100/155dfc/tv.png",altText: 'Smart LED TV screen backlight repair and motherboard circuit troubleshooting service', title: 'LCD / LED TV Repair', description: 'Specialist in LED TV backlight repair and smart TV motherboard repair. We fix TV screen flickering, display issues, and provide affordable TV set maintenance for all brands.' },
        { url: "https://img.icons8.com/ios/100/155dfc/appliances.png", altText: 'Monthly rental for split AC, refrigerator, and front load washing machines for home and office in Mumbai',title: 'Appliance Rental Services', description: 'Affordable washing machine on rent for 6 months or short term AC rental. Get a fridge and washing machine combo rental with flexible plans on 190L fridges and 7kg front load washers.' },
        { url: "https://img.icons8.com/ios/100/155dfc/maintenance--v1.png",altText: 'Professional AC mounting, TV wall installation, and Annual Maintenance Contract (AMC) services', title: 'Installation & Maintenance', description: 'Reliable Annual Maintenance Contracts (AMC) for ACs, TVs, and fridges. Get split AC gas charging, deep cleaning, and preventative maintenance to avoid costly breakdowns.' },
        { url: "https://img.icons8.com/ios/100/155dfc/central-air-conditioning.png",altText: 'Buy quality-tested second hand refurbished ACs, fridges, and washing machines with warranty', title: 'Home Appliance Sales', description: 'Certified second-hand ACs, fridges, and washing machines for sale. Every unit is quality-tested with a warranty, offering you premium brands at budget-friendly prices.' },
        {url: "https://img.icons8.com/ios/100/155dfc/speaker.png", altText: 'Home theater subwoofer repair, amplifier troubleshooting, and speaker distortion fix', title: 'Professional Audio System Repair',  description: 'Fixing speaker sound distortion, wiring connectivity issues, and amplifier failures. Specialized in home theater setup and subwoofer repair for all major audio brands.'},

    ];

    const images = [
        { url: 'https://themes.webdevia.com/appliance/wp-content/uploads/2016/11/repair-m-474x450.jpg', name: 'Professional technician repairing a washing machine drum at home' },
        { url: 'https://themes.webdevia.com/appliance/wp-content/uploads/2016/11/home_service_photo1.jpg', name: 'Master Electronics expert providing doorstep appliance repair service'},
        { url: 'https://themes.webdevia.com/appliance/wp-content/uploads/2014/09/refregirator-474x450.jpg', name: 'engineer repairing refrigerator compressor and gas leak ' },
        { url: 'https://themes.webdevia.com/appliance/wp-content/uploads/2016/11/home_service_photo4-474x450.jpg', name: 'Expert washing machine technician fixing front load PCB board'},
    ];

    const renderList = (isDuplicate = false) => (
        <ul className="flex items-center gap-4 animate-infinite-scroll" aria-hidden={isDuplicate}>
            {images.map((item, index) => (
                <li key={index} className="flex-none">
                    <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-xl border border-gray-200">
                        <img
                            src={item.url}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <section className="bg-gray-100 ">
<h2 className="pt-5 text-3xl md:text-4xl font-bold text-center text-slate-800 mb-3">
                    Services
                </h2>
                        <hr className="border-[#155dfc] border-2 w-15 mx-auto mb-10"  />


            {/* Responsive Grid Section */}
            <div className="container mt-4 mx-auto px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {provides.map((item, index) => (
                        <div className="flex flex-col justify-start items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" key={index}>
                            <img className="w-16 h-16 md:w-20 md:h-20 mb-4" src={item.url} alt={item.altText || item.title} />
                            <h3 className="mb-2 text-black font-roboto font-bold text-lg md:text-xl text-center leading-snug">
                                {item.title}
                            </h3>
                            <hr className="border-[#155dfc] border-2 w-12 mb-4" />
                            <p className="text-center text-sm md:text-base font-poppins text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Infinite Slider Section */}
            <div className="py-16 bg-white border-t border-gray-200">
                <div className="w-full inline-flex flex-nowrap gap-4 overflow-hidden ">
                    {renderList(false)}
                    {renderList(true)}
                </div>
            </div>
        </section>
    );
}

export default Services;