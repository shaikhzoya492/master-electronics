import React from "react";

const Services = () => {
    const provides = [
        { url: "https://img.icons8.com/ios/100/155dfc/air-conditioner.png", title: 'AC Repair & Installation', description: 'Cooling problems, gas refilling, installation of Split & Window ACs' },
        { url: "https://img.icons8.com/ios/100/155dfc/fridge.png", title: 'Fridge / Refrigerator Repair', description: 'Not cooling, gas leakage, compressor replacement' },
        { url: "https://img.icons8.com/ios/100/155dfc/washing-machine.png", title: 'Washing Machine Repair', description: 'Front load, top load, motor & drum issues' },
        { url: "https://img.icons8.com/ios/100/155dfc/microwave.png", title: 'Microwave Oven Repair', description: 'Not heating, sparking, display & touch panel issues' },
        { url: "https://img.icons8.com/ios/100/155dfc/tv.png", title: 'LCD / LED TV Repair', description: 'Screen replacement, sound problems, wall mounting & installation' },
        { url: "https://img.icons8.com/ios/100/155dfc/appliances.png", title: 'Appliance Rental Services', description: 'AC, washing machine, fridge & TV etc. available on flexible rental plans' },
        { url: "https://img.icons8.com/ios/100/155dfc/maintenance--v1.png", title: 'Installation & Maintenance', description: 'AMC (Annual Maintenance Contracts) for ACs, TVs, washing machines & fridges' },
        { url: "https://img.icons8.com/ios/100/155dfc/central-air-conditioning.png", title: 'Home Appliance Sales', description: 'Quality-tested second-hand ACs, fridges, washing machines, and TVs' },
    ];

    const images = [
        { url: 'https://themes.webdevia.com/appliance/wp-content/uploads/2016/11/repair-m-474x450.jpg', name: 'repair' },
        { url: 'https://themes.webdevia.com/appliance/wp-content/uploads/2016/11/home_service_photo1.jpg', name: 'home' },
        { url: 'https://themes.webdevia.com/appliance/wp-content/uploads/2014/09/refregirator-474x450.jpg', name: 'fridge' },
        { url: 'https://themes.webdevia.com/appliance/wp-content/uploads/2016/11/home_service_photo4-474x450.jpg', name: 'washing' },
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
        <section className="bg-gray-100">
          
        

            {/* Responsive Grid Section */}
            <div className="container mt-4 mx-auto px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {provides.map((item, index) => (
                        <div className="flex flex-col justify-start items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" key={index}>
                            <img className="w-16 h-16 md:w-20 md:h-20 mb-4" src={item.url} alt={item.title} />
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