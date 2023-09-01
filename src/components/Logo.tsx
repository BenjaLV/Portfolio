import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logoPicture from '../../public/images/profile-logo.png';
const MotionLink = motion(Link);

const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };

    const backgroundColors = [
        "#121212",
        "rgba(131,58,180,1)",
        "rgba(253,29,29,1)",
        "rgba(252,176,69,1)",
        "rgba(131,58,180,1)",
        "#121212"
    ];

    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/" passHref>
                <motion.div
                    className='w-16 h-16 bg-dark text-ligth flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-ligth'
                    style={{
                        position: 'relative'
                    }}
                    whileHover={{
                        backgroundColor: backgroundColors,
                        scale: 1.1,
                        transition: { duration: 1, repeat: Infinity }
                    }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverEnd}
                >
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className='absolute'
                    >
                        <Image src={logoPicture} alt="Logo" width={64} height={64} priority />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className='absolute flex items-center justify-center w-full h-full'
                    >
                        BLV
                    </motion.div>
                </motion.div>
            </MotionLink>
        </div>
    );
}

export default Logo;
