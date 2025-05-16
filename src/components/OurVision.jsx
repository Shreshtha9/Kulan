import React, { useEffect } from 'react';

const OurVision = () => {
  useEffect(() => {
    // Import AOS CSS
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
    document.head.appendChild(aosCSS);

    // Import AOS JS
    const aosScript = document.createElement('script');
    aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    aosScript.async = true;
    aosScript.onload = () => {
      // Initialize AOS once script is loaded
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: false,
        });
      }
    };
    document.body.appendChild(aosScript);

    // Cleanup function
    return () => {
      if (document.head.contains(aosCSS)) {
        document.head.removeChild(aosCSS);
      }
      if (document.body.contains(aosScript)) {
        document.body.removeChild(aosScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-darkGreen text-white p-4 md:p-8 lg:p-12 relative overflow-hidden">
      {/* Star at left mid */}
      <img
        decoding="async"
        src="https://bestwpware.com/themes-wp/kulan/wp-content/uploads/2024/01/star.png"
        alt="Services"
        className="star__shap absolute left-4 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 w-20 md:w-24 lg:w-32 h-auto aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="1000"
      />

    

      {/* Lines at bottom right */}
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

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <span className="inline-block bg-[#1E2E2B]  text-[#F7D270] px-6 py-2 rounded-md text-lg font-bold tracking-wide">
            Our Vision
          </span>
        </div>

        {/* Side by side grid on larger screens, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="p-6 rounded-lg transition-all duration-300 hover:bg-[#efe0b8] hover:text-emerald-900 border border-emerald-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Queen B2M leadership, our mission is to revolutionize the
              full-time literacy landscape through its world-leading strategies,
              cutting-edge technology, and deep understanding of our clients'
              unique needs and aspirations.
            </p>
            <p>
              We strive to be the trusted partner that guides businesses
              towards sustainable growth and prosperity.
            </p>
          </div>

          {/* Our Approach */}
          <div className="p-6 rounded-lg transition-all duration-300 hover:bg-[#efe0b8] hover:text-emerald-900 border border-emerald-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Approach</h2>
            <p className="mb-4">
              We believe in the power of data-driven insights, creative
              ingenuity, and a relentless pursuit of excellence.
            </p>
            <p>
              Our approach is rooted in a deep understanding of market dynamics,
              enabling us to continuously transform solutions and directly
              address the challenges and opportunities faced by our clients.
            </p>
          </div>

          {/* Our Values */}
          <div className="p-6 rounded-lg transition-all duration-300 hover:bg-[#efe0b8] hover:text-emerald-900 border border-emerald-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
            <p className="mb-4">
              <span className="font-semibold">Innovation:</span> We are committed to
              exploring new frontiers and pushing the boundaries to deliver
              fresh, impactful strategies.
            </p>
            <p>
              <span className="font-semibold">Collaboration:</span> Our success is
              linked to the success of our clients. We believe in building strong,
              collaborative partnerships to achieve common goals.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-6 rounded-lg transition-all duration-300 hover:bg-[#efe0b8] hover:text-emerald-900 border border-emerald-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="mb-4">
              <span className="font-semibold">Integrity:</span> Trust is at the core
              of everything we do. We uphold the highest standards of integrity
              in all our interactions.
            </p>
            <p>
              <span className="font-semibold">Results:</span> We are focused on
              achieving tangible, measurable results for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;