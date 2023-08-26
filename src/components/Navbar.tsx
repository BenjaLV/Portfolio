import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { motion } from 'framer-motion';

interface Props {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = '' }: Props) => {
  const router = useRouter();

  return (
    <Link legacyBehavior href={href}>
      <a
        className={`relative-group ${className} inline-block`}
        style={{ marginRight: '1rem' }} // Espacio entre CustomLinks
      >
        {title}
        <span
          className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full group-hover:bg-dark transition-[width] ease duration-300 ${
            router.asPath === href ? 'w-full' : 'w-0'
          }`}
        >
          &nbsp;
        </span>
      </a>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav className='flex items-center space-x-4'>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
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
  );
};

export default Navbar;
