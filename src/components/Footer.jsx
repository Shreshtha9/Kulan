 import React from "react";
 import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';

import {
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#192825] text-white py-10 px-6 lg:px-20">
      {/* Top Logo and Centered Socials */}
       <div className="max-w-7xl mx-auto border-b border-gray-600 pb-6">
  <div className="flex items-center justify-center space-x-6">
    {/* Left: Logo with Text */}
     <div className="flex items-center space-x-2">
  <img src={logo1} alt="Kulan Logo 1" className="w-10 h-6" />
  <img src={logo2} alt="Kulan Logo 2" className="w-15 h-6" />
</div>


    {/* Divider */}
    <div className="h-6 w-px bg-gray-500" />

    {/* Right: Social Icons */}
    <div className="flex space-x-3">
      <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-gray-700 transition">
        <FaInstagram />
      </a>
      <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-gray-700 transition">
        <FaLinkedin />
      </a>
    </div>
  </div>
</div>


      {/* Grid Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
        {/* Newsletter */}
        {/* Newsletter */}
<div>
  <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
  <p className="text-sm text-gray-300 mb-4">
    If your business hosts events or exhibitions, creative services can assist
    with event planning, booth design.
  </p>

  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    className="space-y-3"
  >
    <input
      type="hidden"
      name="access_key"
      value="c9f66eb3-7bae-487c-bd58-ab7a0f817bff"
    />

    <input type="hidden" name="subject" value="New Newsletter Subscription" />
    <input type="hidden" name="from_name" value="Kulan Newsletter" />

    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="w-full px-4 py-2 bg-[#132623] text-white border border-gray-700 rounded-md focus:outline-none"
    />
 <button className="relative w-full bg-[#ffd800] text-black font-semibold py-2 rounded-md flex items-center justify-center gap-2 overflow-hidden group shadow-md">
  <span className="relative z-10">Subscribe ↗</span>
  <span className="absolute inset-0 z-0 bg-[#326964] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-md" />
</button>

  </form>
</div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#"> </a></li>
            <li><a href="#"> </a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Marketing Strategy</a></li>
            <li><a href="#">Marketing Analysis</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Business Strategy</a></li>
          </ul>
        </div>

        {/* Our Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#F7D270]" /> kulan.info@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#F7D270]" /> +48 93939 0239
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#F7D270]" /> +84 83939 0237
            </li>
            <li className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#F7D270]" /> Mon - Fri 10:00 - 18:00
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#F7D270]" /> Jilons, TP06/90 NY, USA
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        © Copyright All Rights Reserved by{" "}
        <span className="text-[#F7D270]">Kulan WordPress Theme</span>
      </div>
    </footer>
  );
};

export default Footer;
