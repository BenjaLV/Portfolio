
import React from 'react';
import Logo from './Logo';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="navbar" style={{ position: "fixed", top: 0, width: "100%", height: "82px", background: "white", zIndex: 100 }}>
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav className='flex items-center space-x-4'>
          <a href="/" title="Home">Home</a>
          <a href="#about">About</a>
          <a href='#technologies'>Technologies</a>
          <a href="#projects">Projects</a>
        </nav>
        <nav className='flex items-center space-x-4'>
          <motion.a
            href="https://github.com/BenjaLV"
            target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GitHubIcon className='w-8 h-8' />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/benjam%C3%ADn-la-valla-826ba7245"
            target='_blank'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon className='w-8 h-8' />
          </motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
