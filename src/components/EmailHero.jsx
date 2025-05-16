import React, { useEffect } from 'react';
import { Code, LayoutTemplate, Smartphone, Globe, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DigitalMarketingSolution from './DigitalMarketingSolution';
import EmailServices from './EmailServices';
import Upnav from './Upnav';
import Lownav from './Lownav';
import LogoScroll from './logoscroll';
import ProjectStatsComponent from './ProjectStatsComponent';
import Footer from './Footer';

const EmailMarketingHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
    <Upnav />
    <Lownav />
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0f2d26] mt-[100px] sm:mt-[120px] md:mt-[144px] text-white overflow-hidden">
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-10 top-1/4 opacity-20"
        >
          <LayoutTemplate size={120} className="text-[#b9aa86]" />
        </motion.div>
        
        <motion.div 
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-20 bottom-1/4 opacity-20"
        >
          <Code size={100} className="text-[#b9aa86]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-[#b9aa86]"></div>
              <span className="text-[#b9aa86] font-medium">EMAIL MARKETING </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevate Your <span className="text-[#b9aa86]">Customer Engagement</span> with Powerful Emails
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-200 mb-8">
              Drive conversions and nurture customer relationships with expertly crafted, personalized email campaigns.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#b9aa86] hover:bg-[#d4c5a0] text-[#0f2d26] px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Get Your Free Consultation <ArrowRight size={18} />
              </button>
              <button className="border-2 border-[#b9aa86] text-[#b9aa86] hover:bg-[#b9aa86] hover:text-[#0f2d26] px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                View Our Portfolio <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0f2d26] opacity-90"></div>
          <img 
            src="/images/emailhero.jpg" 
            alt="Email marketing background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-[#b9aa86]"></div>
              <span className="text-[#b9aa86] font-medium">OUR APPROACH</span>
              <div className="w-8 h-1 bg-[#b9aa86]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Our Email Marketing <span className="text-[#b9aa86]">Stands Out</span>
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Personalized, data-driven campaigns designed to boost your ROI and customer retention. From building targeted email lists to crafting high-converting messages and automating personalized drip campaigns, we handle every aspect of email marketing.
            </p>
          </div>

          {/* Email Marketing Value Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Personalization", "Automation", "Analytics", "Deliverability", "Segmentation", "ROI Optimization"].map((title, index) => (
              <div key={index} className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl border border-[#356e62] transition-all duration-300 hover:shadow-lg hover:bg-opacity-100 hover:-translate-y-2" data-aos="fade-up" data-aos-delay={`${100 * index}`}>  
                <div className="w-14 h-14 bg-[#356e62] rounded-full flex items-center justify-center mb-6">
                  <LayoutTemplate size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f2d26] mb-3">{title}</h3>
                <p className="text-gray-700">Comprehensive {title.toLowerCase()} solutions to maximize your email marketing impact.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <LogoScroll />
    <EmailServices />
    <ProjectStatsComponent />
      <DigitalMarketingSolution />
      <Footer />
      
    </>
  );
};

export default EmailMarketingHero;