import React from 'react';

 const solutions = [
  {
    image: '/images/OIP1.jpeg',
    title: 'SEO Optimization',
    description: 'Improve your websites visibility on search engines and drive organic traffic with strategic keyword targeting and on-page SEO.',
  },
  {
    image: '/images/OIP2.webp',
    title: 'Social Media Marketing',
    description: 'Engage your audience and grow your brand presence across platforms like Facebook, Instagram, LinkedIn, and more.',
  },
  {
    image: '/images/OIP3.jpeg',
    title: 'Content Marketing',
    description: 'Create and distribute valuable, relevant content to attract and retain a clearly defined audience and drive profitable customer actions.',
  },
  {
    image: '/images/OIP4.jpeg',
    title: 'Pay-Per-Click Advertising',
    description: 'Boost your reach instantly with targeted PPC campaigns that convert clicks into loyal customers and measurable ROI.',
  },
];


const Starburst = ({ className }) => (
  <svg
    className={`absolute ${className} w-24 sm:w-32 opacity-10 z-0`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#4F9F94" strokeWidth="8">
      {[...Array(8)].map((_, i) => {
        const angle = (360 / 8) * i;
        const x2 = 50 + 40 * Math.cos((angle * Math.PI) / 180);
        const y2 = 50 + 40 * Math.sin((angle * Math.PI) / 180);
        return (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={x2}
            y2={y2}
            strokeLinecap="round"
          />
        );
      })}
    </g>
  </svg>
);

const HalfCircle = ({ className }) => (
  <svg
    className={`absolute ${className} w-[320px] h-[160px] opacity-10 z-0`}
    viewBox="0 0 320 160"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="diagonalLines"
        patternUnits="userSpaceOnUse"
        width="10"
        height="10"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="10" stroke="#4F9F94" strokeWidth="2" />
      </pattern>
    </defs>
    <path
      d="M0,160 A160,160 0 0,1 320,160 L320,0 L0,0 Z"
      fill="url(#diagonalLines)"
    />
  </svg>
);

const  DigitalMarketingSolution = () => {
  return (
    <section className="relative bg-[#1E2E2B] py-20 px-4 sm:px-8 md:px-16 lg:px-24 text-center overflow-hidden">

      {/* === Decorative SVGs Placed at Multiple Background Positions === */}
      <Starburst className="top-[10%] left-0" />
      <HalfCircle className="top-[20%] right-0 rotate-180" />
      <Starburst className="top-[50%] right-[10%]" />
      <HalfCircle className="bottom-[20%] left-[10%]" />
      <Starburst className="bottom-0 left-1/2 -translate-x-1/2" />

      {/* === Content === */}
       <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400 mb-14 leading-snug">
  Our Comprehensive Digital Marketing Solutions
</h2>


      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-[#386861] border-2 border-[#0A1B1C] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] flex flex-col items-center text-center"
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-44 object-cover rounded-xl mb-5 shadow-md"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
              {solution.title}
            </h3>
            <p className="text-white text-sm sm:text-base leading-relaxed">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default  DigitalMarketingSolution;