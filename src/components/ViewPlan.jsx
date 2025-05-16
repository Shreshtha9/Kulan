import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingPlanComponent = () => {
    return (
        <section className="bg-[#0f2d26] text-white py-16 px-8 lg:px-24">
            <button className="bg-[#1d3f37] text-[#b9aa86] px-6 py-2 rounded-lg mb-6 font-semibold">View Plan</button>
            <h2 className="text-5xl font-bold mb-6">View Our Pricing Plan And Start Your Project</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                Digital marketing agencies often run paid advertising campaigns for themselves. This includes creating compelling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <div className="bg-[#1d3f37] p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
                    <p className="text-gray-300 mb-6">
                        Work closely with clients to understand their business is a goals, target audience.
                    </p>
                    <h4 className="text-4xl font-bold text-[#f4b41a] mb-6">$90 <span className="text-lg">/Month</span></h4>
                    <button className="bg-[#356e62] text-white px-6 py-2 rounded-lg mb-6 font-semibold">Get Started Now ➔</button>
                    <ul className="space-y-4">
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Our Community support system</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Unlimited Social Media Management</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> SEO management & copywriting</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Web Design & Development</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Priority email & phone support</li>
                    </ul>
                </div>

                {/* Business Plan */}
                <div className="bg-[#356e62] p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">Business Plan</h3>
                    <p className="text-gray-300 mb-6">
                        Work closely with clients to understand their business is a goals, target audience.
                    </p>
                    <h4 className="text-4xl font-bold text-[#f4b41a] mb-6">$100 <span className="text-lg">/Month</span></h4>
                    <button className="bg-[#f4b41a] text-black px-6 py-2 rounded-lg mb-6 font-semibold">Purchase Now ➔</button>
                    <ul className="space-y-4">
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Our Community support system</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Unlimited Social Media Management</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> SEO management & copywriting</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Web Design & Development</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Priority email & phone support</li>
                    </ul>
                </div>

                {/* Premium Plan */}
                <div className="bg-[#1d3f37] p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
                    <p className="text-gray-300 mb-6">
                        Work closely with clients to understand their business is a goals, target audience.
                    </p>
                    <h4 className="text-4xl font-bold text-[#f4b41a] mb-6">$187 <span className="text-lg">/Month</span></h4>
                    <button className="bg-[#356e62] text-white px-6 py-2 rounded-lg mb-6 font-semibold">Purchase Now ➔</button>
                    <ul className="space-y-4">
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Our Community support system</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Unlimited Social Media Management</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> SEO management & copywriting</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Web Design & Development</li>
                        <li><CheckCircle className="text-[#b9aa86] inline mr-2" /> Priority email & phone support</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PricingPlanComponent;
