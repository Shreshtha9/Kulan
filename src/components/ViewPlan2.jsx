import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const cardData = [
  {
    title: "How can you start your business for your next generation",
    image: "/images/buisness.jpg",
    date: "14 May 2025",
    author: "kulan_wp",
    description: "Digital marketing agencies run paid advertising campaigns for themselves.",
   
  },
  {
    title: "Unleashing Intelligent Digital Marketing Solutions",
    image: "/images/marketing.jpg",
    date: "14 May 2025",
    author: "kulan_wp",
    description: "Digital marketing agencies run paid advertising campaigns for themselves.",
  },
  {
    title: "Precision Strategies for Modern Digital Branding",
    image: "/images/blog3-1-1.jpg",
    date: "14 May 2025",
    author: "kulan_wp",
    description: "Digital marketing agencies run paid advertising campaigns for themselves.",
  },
];

export default function ViewPlan() {
  return (
    <section className="bg-[#0d1d1f] text-white py-16 px-4 md:px-12">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
      <div>
        <button className="bg-[#1f2d2f] text-yellow-400 text-sm px-4 py-1 rounded mb-2">
          View Plan
        </button>
        <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
          View Our Pricing Plan And <br /> Start Your Project
        </h2>
      </div>
       <button className="relative overflow-hidden px-5 py-2 rounded-md mt-4 md:mt-0 text-black font-medium group bg-[#fbd47f]">
  <span className="relative z-10">View All News →</span>
  <span className="absolute inset-0 bg-[#2e615c] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
</button>

    </div>

    <div className="grid md:grid-cols-3 gap-x-4 gap-y-8">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className="bg-[#132323] hover:bg-[#2e615c] transition-colors duration-300 rounded-lg overflow-hidden shadow-lg flex flex-col h-[580px] w-full"
        >
          <div className="flex items-center gap-4 text-sm text-gray-400 p-4">
            <span className="flex items-center gap-1">
              <FaUser className="text-yellow-400" /> {card.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-yellow-400" /> {card.date}
            </span>
          </div>

          <h3 className="text-lg font-semibold px-4">{card.title}</h3>

          <img
            src={card.image}
            alt={card.title}
            className="w-[80%] h-[260px] object-cover mx-auto mt-4 rounded"
          />

          <p className="text-gray-300 text-sm px-4 mt-4">{card.description}</p>

          <div className="px-4 pb-4 mt-6">
            <a
              href="#"
              className="text-yellow-400 hover:underline text-sm inline-flex items-center"
            >
              More Details ↗
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}