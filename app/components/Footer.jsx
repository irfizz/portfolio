import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-10">
      <div className="text-center sm:flex  items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <div className="text-center justify-center flex gap-2">
          <a href="#top">
            <Image alt="" src={isDarkMode ? assets.irfizzdev_dark : assets.irfizzdev_light} className="w-36 mx-auto mb-2" />
          </a>
        </div>
        <p>&copy; 2025 IrfIzzDev. All Rights Reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a className="flex items-center justify-center gap-3" target="_blank" href="https://github.com/irfizz">
              <Image alt="" src={assets.github} className="w-12" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/irfan-izzat-azman-47a3552a1/" className="flex items-center justify-center gap-3">
              <Image alt="" src={isDarkMode ? assets.linkedinIconWhite : assets.linkedinIcon} className="w-10" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
