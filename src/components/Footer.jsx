import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative w-full bg-black-100 py-8">
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left section */}
          <motion.div
            variants={fadeIn('right', 'spring', 0.1, 0.75)}
            className="flex-1"
          >
            <h4 className="text-white font-bold text-[24px]">Let's Connect</h4>
            <p className="mt-2 text-secondary text-[16px]">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </motion.div>

          {/* Middle section */}
          <motion.div
            variants={fadeIn('up', 'spring', 0.2, 0.75)}
            className="flex-1 flex flex-col items-center"
          >
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/isammittal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex justify-center items-center border border-white hover:bg-white hover:text-black transition-colors"
              >
                <i className="fab fa-github text-[20px]"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/isammittal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex justify-center items-center border border-white hover:bg-white hover:text-black transition-colors"
              >
                <i className="fab fa-linkedin-in text-[20px]"></i>
              </a>
              <a
                href="https://x.com/isammittal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex justify-center items-center border border-white hover:bg-white hover:text-black transition-colors"
              >
                <i className="fab fa-twitter text-[20px]"></i>
              </a>
            </div>
          </motion.div>

          {/* Right section */}
          <motion.div
            variants={fadeIn('left', 'spring', 0.3, 0.75)}
            className="flex-1 text-right"
          >
            <a href="mailto:sammittal2010@gmail.com" className="text-secondary hover:text-white transition-colors">
              sammittal2010@gmail.com
            </a>
            <p className="mt-2 text-secondary text-[14px]">
              Based in Moga, Punjab, India
            </p>
          </motion.div>
        </div>

        {/* Bottom copyright */}
        <motion.div
          variants={textVariant(0.4)}
          className="w-full h-[1px] bg-secondary my-8"
        />
        <motion.div
          variants={fadeIn('up', 'spring', 0.4, 0.75)}
          className="text-center text-secondary text-[14px]"
        >
          © {currentYear} Sam. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
