
import React, { useState } from 'react';
import Logo from './Logo';
import { GitHubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons';
import { motion } from 'framer-motion';
import UseThemeSwitcher from './hooks/UseThemeSwitcher';


interface Props {
  href: string;
  text: string;
  mode: string;
  toggle: () => void;
}

const NavigationLink = ({ href, text, mode }: Props) => (
  <motion.a
    href={href}
    style={{ color: mode === "dark" ? "white" : "black" }}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.9 }}
  >
    {text}
  </motion.a>
);

const NavigationMobileLink = ({ href, text, mode, toggle }: Props) => (
  <motion.a
    href={href}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => {
      toggle();
    }}
    className='my-2 text-ligth dark:text-dark'
  >
    {text}
  </motion.a>
);


const Navbar = () => {

  const [mode, setMode] = UseThemeSwitcher() as [string, React.Dispatch<React.SetStateAction<string>>];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }


  const toggleTheme = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };


  return (
    <div className="navbar" style={{ position: "fixed", top: 0, width: "100%", height: "82px", background: mode === "dark" ? "#3333" : "rgba(255, 255, 255, 0.5)", zIndex: 100 }}>
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative z-10'>

        <button className='absolute left-6 flex-col justify-center items-center hidden lg:hidden md:block sm:block xs:block' onClick={handleClick}>
          <span className={`bg-dark dark:bg-ligth block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-dark dark:bg-ligth block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-dark dark:bg-ligth block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className='w-full flex justify-between items-center md:hidden sm:hidden xs:hidden'>
          <nav className='flex items-center space-x-4'>
            <NavigationLink href="#home" text="Home" mode={mode} toggle={handleClick} />
            <NavigationLink href="#about" text="About" mode={mode} toggle={handleClick} />
            <NavigationLink href='#technologies' text="Technologies" mode={mode} toggle={handleClick} />
            <NavigationLink href="#projects" text="Projects" mode={mode} toggle={handleClick} />
          </nav>
          <nav className='flex items-center space-x-4'>
            <motion.a
              href="https://github.com/BenjaLV"
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHubIcon className='w-8 h-8' mode={mode} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/benjam%C3%ADn-la-valla-826ba7245"
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon className='w-8 h-8' />
            </motion.a>
            <button onClick={toggleTheme} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "ligth" ? "bg-dark text-ligth" : "bg-ligth text-dark"}`}>
              {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
            </button>
          </nav>
        </div>


        {
          isOpen ?

            <motion.div
              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1, transition:{2:2} }}
              className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-dark/60 dark:bg-ligth/75 rounded-lg backdrop-blur-md py-32'>
              <nav className='flex items-center flex-col justify-center'>
                <NavigationMobileLink href="#home" text="Home" mode={mode} toggle={handleClick} />
                <NavigationMobileLink href="#about" text="About" mode={mode} toggle={handleClick} />
                <NavigationMobileLink href='#technologies' text="Technologies" mode={mode} toggle={handleClick} />
                <NavigationMobileLink href="#projects" text="Projects" mode={mode} toggle={handleClick} />

              </nav>
              <nav className='flex items-center space-x-4'>
                <motion.a
                  href="https://github.com/BenjaLV"
                  target='_blank'
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='sm:mx-1'
                >
                  <GitHubIcon className='w-8 h-8 bg-ligth dark:bg-dark rounded-full' mode={mode} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/benjam%C3%ADn-la-valla-826ba7245"
                  target='_blank'
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='sm:mx-1'
                >
                  <LinkedInIcon className='w-8 h-8' />
                </motion.a>
                <button onClick={toggleTheme} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "ligth" ? "bg-dark text-ligth" : "bg-ligth text-dark"}`}>
                  {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
                </button>
              </nav>
            </motion.div>

            : null
        }

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
