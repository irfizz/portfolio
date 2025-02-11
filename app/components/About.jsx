import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id="about" className="w-full px-[10%] py-10 scroll-mt-20 sm:grid sm:grid-cols-1 ">
      <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mb-2 text-lg font-Ovo">
        Introduction
      </motion.h4>
      <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-center text-5xl font-Ovo">
        About Me
      </motion.h2>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex w-full max-w-6xl mx-auto flex-col lg:flex-row gap-20 my-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 lg:w-96 min-w-[250px] rounded-3xl max-w-none mx-auto">
          <Image alt="user" src={assets.gambar} className="w-full rounded-3xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex-1 max-w-[80%] w-full mx-auto px-[5%]">
          <p className="mb-10 max-w-2xl font-Ovo  text-justify ">
            With a background as a former business owner, I bring expertise in operations, financial management, and competitive analysis. Now transitioning into front-end development, I’ve honed my
            problem-solving skills and self-taught programming to build intuitive, user-centered web applications. My business experience gives me a unique perspective on creating solutions that are
            both technically sound and aligned with user needs. I’m passionate about continuous learning and excited to contribute to innovative digital experiences.
          </p>
          <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="grid grid-cols-auto gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 flex flex-col items-center cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3 flex items-center justify-center" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 text-xl text-gray-700 font-Ovo dark:text-white/80 flex items-start">
            Tools I Use
          </motion.h4>
          <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.5 }} className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black">
                <Image alt="Tool" src={tool} className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
