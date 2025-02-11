import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  return (
    <div className="w-full max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="items-center pb-5 px-4">
        <p className="italic text-lg sm:text-2xl md:text-3xl font-Ovo max-w-xs sm:max-w-lg break-words">"When you can't change the direction of the wind, adjust your sails"</p>
        <p className="font-Outfit text-sm sm:text-lg">- H. Jackson Brown Jr. (American Author)</p>
      </motion.div>
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, type: "spring", stiffness: 100 }} className="pt-10">
        <Image src={assets.gambar} alt="" className="rounded-md py-1 px-2 border border-gray-500 w-36" />
      </motion.div>
      <motion.h3 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-end gap-2 text-xl md:text-2xl font-Ovo pb-5 pt-2">
        Hi ! I am Nur Irfan Izzat <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1 initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Front-end Developer based in Shah Alam, Selangor, Malaysia.
      </motion.h1>
      <motion.p
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="w-[90%] sm:w-4/5 md:w-3/4 lg:w-2/3 text-justify mx-auto font-Ovo mt-5">
        Former business owner with expertise in operations, financial management, and competitive analysis. Transitioning into front-end development with strong problem-solving, time management, and
        self-taught programming skills.
      </motion.p>
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent ">
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a href="/Resume-Nur_Irfan_Izzat.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black">
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
