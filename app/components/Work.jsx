import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mb-2 text-lg font-Ovo">
        Portfolio
      </motion.h4>
      <motion.h2 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-center text-5xl font-Ovo">
        Notable Projects
      </motion.h2>
      <motion.p initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Explore a portfolio of innovative projects and showcasing creative solutions. <br /> Also, feel free to check out my{" "}
        <span className="text-red-500 cursor-pointer">
          <a href="https://github.com/irfizz?tab=repositories" target="_blank">
            github repositories.
          </a>
        </span>
      </motion.p>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.6 }} className="grid grid-cols-auto gap-5 my-10 dark:text-black">
        {workData.map((project, index) => (
          <div key={index} className="flex flex-col justify-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border border-gray-500 "
              style={{ backgroundImage: `url(${project.bgImage})` }}>
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 border border-gray-300">
                <div>
                  <h2 className="font-semibold ">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-500">
                  <Image alt=" send icon" src={assets.send_icon} className="w-5" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 1 }} className="flex mx-auto gap-10 pt-3 pb-5">
              <motion.a
                whileHover={{ scale: 1.1 }}
                target="_blank"
                className="border rounded-md border-gray-500 cursor-pointer px-5 py-1 hover:bg-lightHover dark:bg-white dark:text-black dark:hover:bg-darkHover dark:hover:text-white "
                href={project.sourcelink}>
                Source
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                target="_blank"
                className="border rounded-md border-gray-500 cursor-pointer px-5 py-1 hover:bg-lightHover dark:bg-white dark:text-black dark:hover:bg-darkHover dark:hover:text-white "
                href={project.demolink}>
                Demo
              </motion.a>
            </motion.div>
          </div>
        ))}
      </motion.div>
      {/* <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="w-max flex gap-2 items-center justify-center text-gray-700 
        border-[0.5px] rounded-full mx-auto my-20 py-3 px-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">
        Show More <Image alt="Right arrow" src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} className="w-4" />
      </motion.a> */}
    </motion.div>
  );
};

export default Work;
