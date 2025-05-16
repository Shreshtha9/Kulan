







import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const EmailServices = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow:
        "0 20px 25px -5px rgba(16, 185, 129, 0.2), 0 10px 10px -5px rgba(16, 185, 129, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const featureCardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -5,
      scale: 1.03,
      boxShadow:
        "0 10px 15px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -4px rgba(16, 185, 129, 0.1)",
      borderColor: "rgba(45, 212, 191, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(16, 185, 129, 0.4), 0 4px 6px -4px rgba(16, 185, 129, 0.2)",
      transition: {
        duration: 0.2,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  const serviceFeatures = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-teal-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      title: "Personalized Campaigns",
      description: "Tailored content that speaks directly to your audience's needs",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-teal-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"></path>
          <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"></path>
        </svg>
      ),
      title: "High Deliverability",
      description: "Optimized sending to ensure your emails reach the inbox",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-teal-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      title: "A/B Testing",
      description: "Data-driven optimization to maximize engagement and conversions",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-teal-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18"></path>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
        </svg>
      ),
      title: "Detailed Analytics",
      description: "Comprehensive insights to track and improve performance",
    },
  ];

  return (
    <div className="min-h-screen bg-darkGreen text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Decorative Star - Left Side */}
      <div className="absolute left-0 top-28 w-20 sm:w-28 lg:w-36 z-0 opacity-70">
        <img
          src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/star.png"
          alt="Star"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="0"
          data-aos-duration="1000"
          className="w-full h-auto"
        />
      </div>

      {/* Decorative Half Circle - Right Side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 sm:w-40 lg:w-52 z-0 opacity-70">
        <img
          src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/circle.png"
          alt="Circle"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="0"
          data-aos-duration="1000"
          className="w-full h-auto"
        />
      </div>
      <img
        decoding="async"
        src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/rat_agal.png"
        alt="About Shape Image 2"
        className="rat_agal absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 h-auto aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="1000"
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Email Marketing Services
          </h1>

          <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
            Connect directly with your audience through powerful, conversion-focused email campaigns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-emerald-100 "
            >
              We create engaging, personalized email campaigns that nurture relationships with your audience and drive measurable results. Our team combines strategic messaging with beautiful design to craft emails that get opened, read, and clicked.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-emerald-100"
            >
              From welcome sequences to promotional campaigns, newsletters to abandoned cart recovery, we develop email marketing solutions tailored specifically to your business goals and customer journey.
            </motion.p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="bg-darkGreen/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-700/50 transition-all duration-300 flex flex-col"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-emerald-900/70 rounded-lg p-3 w-fit mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-[#b9aa86]">
                    {feature.title}
                  </h3>
                  <p className="text-emerald-100">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full text-lg font-medium shadow-lg shadow-emerald-800/50 transition-all duration-300"
              >
                Get Your Free Quote
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative -mt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover="hover"
              variants={{
                hover: {
                  scale: 1.01,
                  transition: { duration: 0.3 },
                },
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6,
              }}
              className="relative z-10 bg-gradient-to-br from-emerald-800/90 to-emerald-950/90 backdrop-blur-md rounded-2xl p-2 border border-emerald-700/50 shadow-2xl"
            >
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] lg:aspect-[16/12]">
                {/* Using a placeholder image that will always work */}
                <img
                  src="/images/email-marketing.jpg"
                  alt="Email marketing campaign on device screens"
                  className="w-full h-full object-cover rounded-lg "
                />

                {/* Floating design elements */}
                <motion.div
                  className="absolute top-5 right-5 bg-white/10 backdrop-blur-md p-2 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-teal-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-md p-2 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-teal-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-gradient-to-br from-[#0f2d26]/50 to-[#0f2d20]/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-700/50 transition-all duration-300"
          >
            <div className="text-3xl font-bold text-teal-300 mb-3">35%</div>
            <p className="text-emerald-100">
              Average open rate for our optimized email campaigns
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-gradient-to-br from-[#0f2d26]/50 to-[#0f2d26]/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-700/50 transition-all duration-300"
          >
            <div className="text-3xl font-bold text-teal-300 mb-3">4.2x</div>
            <p className="text-emerald-100">
              Average ROI increase for businesses using our email strategies
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-gradient-to-br from-[#0f2d26]/50 to-[#0f2d26]/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-700/50 transition-all duration-300"
          >
            <div className="text-3xl font-bold text-teal-300 mb-3">500+</div>
            <p className="text-emerald-100">
              Successful email campaigns delivered for satisfied clients
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-24 text-center">
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Ready to boost your customer engagement and sales with strategic email marketing? Let's create something effective together.
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-4 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full text-lg font-medium shadow-lg shadow-emerald-800/50 transition-all duration-300"
          >
            Start Your Campaign
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmailServices;