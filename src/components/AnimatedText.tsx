import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
    text: string;
    className?: string;
}

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const AnimatedText = ({ text, className = '' }: Props) => {

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    return (
        <div ref={ref} className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-ligth sm:py-0'>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-ligth xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl ${className}`}
                variants={quote}
                initial="initial"
                animate={inView ? "animate" : "initial"}
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word + '-' + index} className='inline-block'
                            variants={singleWord}
                        >
                            {word}&nbsp;
                        </motion.span>)
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText;
