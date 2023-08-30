
import React from 'react';
import Logo from './Logo';
import { GitHubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons';
import { motion } from 'framer-motion';
import UseThemeSwitcher from './hooks/UseThemeSwitcher';


interface Props {
  href: string;
  text: string;
  mode: string;
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

const Navbar = () => {

  const [mode, setMode] = UseThemeSwitcher() as [string, React.Dispatch<React.SetStateAction<string>>];

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };


  return (
    <div className="navbar" style={{ position: "fixed", top: 0, width: "100%", height: "82px", background: mode === "dark" ? "#1a1a1a" : "white", zIndex: 100 }}>
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav className='flex items-center space-x-4'>

          <NavigationLink href="/" text="Home" mode={mode} />
          <NavigationLink href="#about" text="About" mode={mode} />
          <NavigationLink href='#technologies' text="Technologies" mode={mode} />
          <NavigationLink href="#projects" text="Projects" mode={mode} />
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
          <button onClick={toggleTheme} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "ligth" ? "bg-dark text-ligth" : "bg-ligth text-dark"}`}>
            {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
          </button>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
