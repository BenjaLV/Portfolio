import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'


interface Props {
    name: string;
    x: string;
    y: string;
}

const Skills = ({ name, x, y }: Props) => {

    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-ligth py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-ligth lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-ligth xs:font-bold ' whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}>
            {name}
        </motion.div>
    )
}

const Technologies = () => {
    return (
        <Layout>
            <h2 id='technologies' className='font-bold text-8xl w-full text-center dark:text-ligth -mt-20 md:text-6xl md:mt-32 xs:text-2xl xs:mt-16'>Technologies</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLigth dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLigthLg lg:dark:bg-circularDarkLg
            md:bg-circularLigthMd md:dark:bg-circularDarkMd
            sm:bg-circularLigthSm sm:dark:bg-circularDarkSm'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-ligth p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-ligth lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{ scale: 1.05 }}>
                    Web
                </motion.div>
                <Skills name='React' x="-20vw" y='2vw' />
                <Skills name='TypeScrypt' x="0vw" y='-10vw' />
                <Skills name='NodeJS' x="20vw" y='6vw' />
                <Skills name='Express' x="0vw" y='13vw' />
                <Skills name='MongoDB' x="-20vw" y='-15vw' />
                <Skills name='Tailwind' x="15vw" y='-12vw' />
                <Skills name='Redux' x="8vw" y='-22vw' />
                <Skills name='JWT' x="-25vw" y='-22vw' />
                <Skills name='PostgreSQL' x="32vw" y='-5vw' />
                <Skills name='SQL' x="18vw" y='18vw' />
                <Skills name='NextJS' x="-25vw" y='18vw' />
                <Skills name='GIT' x="-36vw" y='1vw' />
            </div>
        </Layout>
    )
}

export default Technologies
