import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "Why is my AC leaking water inside the room?",
            answer: "This is usually caused by a clogged drain pipe, a frozen evaporator coil, or a damaged drain pan. Our technicians can perform a deep clean and clear the blockage to prevent water damage."
        },
        {
            question: "How often should I get my AC serviced?",
            answer: "For optimal performance and energy efficiency, we recommend AC servicing every 6 months. This includes filter cleaning, gas pressure checks, and electrical inspections."
        },
        {
            question: "What does it mean when the AC timer light is blinking?",
            answer: "A blinking timer light is often an error code indicating a refrigerant leak or a sensor fault. It’s best to turn off the unit and call for a diagnostic to avoid compressor damage."
        },
        {
            question: "My LED TV has a sound but no picture. Can it be fixed?",
            answer: "Yes, this is a common symptom of a backlight failure. We can replace the LED strips or repair the power supply board to restore your picture quality."
        },
         {
            question: "What causes vertical lines on a TV screen?",
            answer: "Vertical lines are usually caused by a loose ribbon cable or a faulty T-CON board. In some cases, it may be a panel issue, which our experts can diagnose on-site."
        },
        {
            question: "Why won't my Smart TV connect to the Wi-Fi?",
            answer: "This can be due to outdated firmware or a faulty internal Wi-Fi module. We provide software updates and hardware repairs for all major smart TV brands."
        },
        {
            question: "Why is my microwave sparking inside?",
            answer: "Sparking (arcing) is often caused by a damaged mica sheet or food buildup on the waveguide cover. Stop using the unit immediately to avoid damaging the magnetron."
        },
        {
            question: "Why is the microwave turntable not spinning?",
            answer: "This is typically a result of a burnt-out turntable motor or a misaligned roller ring. These are quick, affordable repairs that we handle daily."
        },
         {
            question: "Why is my oven not heating up to the right temperature?",
            answer: "A faulty heating element or a broken thermostat is the usual culprit. We can calibrate your oven and replace the heating coils to ensure even cooking."
        },
        {
            question: "Why is my washing machine making a loud vibrating noise?",
            answer: "Loud noises during the spin cycle usually indicate worn-out drum bearings or unbalanced shock absorbers. Replacing these early prevents more expensive motor damage."
        },
        {
            question: "Why is my refrigerator not cooling but the light is on?",
            answer: "If the light is on but there's no cooling, you likely have a failed starter relay, a faulty compressor, or a dirty condenser coil that needs cleaning."
        },
        {
            question: "Why is food freezing in the refrigerator section?",
            answer: "This is often caused by a faulty temperature sensor or a stuck air damper that allows too much cold air from the freezer into the fridge compartment."
        },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex justify-center bg-gray-50 py-12 px-4 md:px-6">
            <div className="max-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-800 mb-3">
                    FAQ's
                </h2>
                        <hr className="border-[#155dfc] border-2 w-15 mx-auto mb-10"  />

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors focus:outline-none"
                            >
                                <span className="font-semibold text-slate-700 text-sm md:text-base leading-tight">
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500 shrink-0 ml-4" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500 shrink-0 ml-4" />
                                )}
                            </button>

                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-500px border-t border-gray-100' : 'max-h-0'
                                }`}
                            >
                                <div className="p-5 text-gray-600 text-sm md:text-base leading-relaxed bg-white">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;