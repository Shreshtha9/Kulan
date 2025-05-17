import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ConnectWithUs = () => {
  return (
    <div
      className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center relative flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('/images/connectus.jpg')`, // from public/images
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white flex flex-col items-center"
      >
        <a
          href="/contact"
          className="flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold group"
        >
          <span className="text-yellow-400">Connect</span>
          <motion.span
            className="ml-3 w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition duration-300"
            whileHover={{ scale: 1.2, rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowUpRight className="text-black w-5 h-5 md:w-6 md:h-6" />
          </motion.span>
        </a>
        <p className="text-white text-2xl sm:text-3xl md:text-4xl mt-2 font-medium">with us</p>
      </motion.div>
    </div>
  );
};

export default ConnectWithUs;

