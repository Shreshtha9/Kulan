// src/components/AboutHeader.jsx

import { motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurVision from "../components/OurVision";
import { CheckCircle, Award, ArrowUpRight } from "lucide-react";
import Upnav from "../components/Upnav";
import Lownav from "../components/Lownav";
import PricingPlanComponent from "../components/ViewPlan";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import LatestProject from "../components/LatestProject";
import Logoscroll from "../components/logoscroll";
import HowItWork from "../components/HowItWork";
import ViewPlan from "../components/ViewPlan2";
import ProjectStatsComponent from "../components/ProjectStatsComponent";

const About = () => {
  return (
    <>
      {" "}
      <Upnav />
      <Lownav />
      <div className="relative w-full h-[300px] mt-[100px] sm:mt-[120px] md:mt-[144px] bg-gradient-to-r from-[#302600] via-[#121b1a] to-[#08231f] flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Background swirl-like circles */}
        <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-600 opacity-10 top-[20%] left-[15%]"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-600 opacity-10 bottom-[10%] right-[10%]"></div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-extrabold z-10">About US</h1>
      </div>
      {/*  why you choose kulan */}
      <section className="bg-[#0f2d26] text-white py-16 px-4 sm:px-8 lg:px-24">
        {/* Main Content Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Large Background Image */}
          <div className="absolute right-0 top-0 w-full lg:w-2/4 h-full">
            <img
              src="/images/workkulan.jpg"
              alt="Business Discussion"
              className="rounded-2xl w-full h-full object-cover"
              style={{
                minHeight: "500px",
                maxHeight: "800px",
              }}
            />
          </div>
          Left Side Content Container
          <div className="relative z-10 lg:w-1/2">
            {/* Header Content */}
            <div className="mb-8 lg:mb-12">
              <button className="bg-[#b9aa86] text-[#0f2d26] px-6 py-3 rounded-lg font-semibold mb-6 hover:bg-[#d4c5a0] transition-colors">
                Why Choose Kulan
              </button>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We Help Your Business To Grow Up More Stronger
              </h2>
              <p className="text-lg md:text-xl">
                Digital marketing agencies often run paid advertising campaigns
                for themselves. This includes creating compelling.
              </p>
            </div>

            {/* Awards Container - Overlapping Image */}
            <div className="bg-[#356e62] p-6 md:p-8 rounded-2xl shadow-lg mt-8 lg:mt-12 lg:-mr-16">
              <div className="flex items-center gap-4 md:gap-6 mb-6">
                <Award className="text-[#b9aa86] flex-shrink-0" size={36} />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  World Marketing Winning Awards 2023
                </h3>
              </div>

              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle
                    className="text-[#b9aa86] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm md:text-base lg:text-lg">
                    Allow customers to choose from various payment methods and
                    offer flexible billing options to accommodate their
                    financial preferences.
                  </span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <CheckCircle
                    className="text-[#b9aa86] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm md:text-base lg:text-lg">
                    Deliver excellent customer service through various channels,
                    including phone, email, live chat, and in-person assistance
                    at physical locations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Logoscroll />
      <LatestProject />
      <HowItWork />
      <ProjectStatsComponent />
      <PricingPlanComponent />
      <OurVision />
      <Feedback />
      <ViewPlan />
      <Footer />
    </>
  );
};

export default About;
