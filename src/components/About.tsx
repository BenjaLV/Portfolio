import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import aboutPicture from '../../public/images/about-BW-Slash7.jpg';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const imageStyle = {
        borderRadius: 32,
        overflow: 'hidden',
        transform: `rotate(${isHovered ? 0 : (isInView ? 10 : 0)}deg)`,
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer'
    };

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    if (inView && !isInView) {
        setIsInView(true);
    } else if (!inView && isInView) {
        setIsInView(false);
    }

    return (
        <Layout className='pt-1'>
            <main id='about' className='flex w-full flex-col items-center justify-center dark:text-ligth' style={{ paddingTop: "100px" }}>
                <AnimatedText text='Passion Fuels Purpose' className='mb-16 lg:text-7xl sm:text-5xl xs:text-4xl sm:mb-8' />
                <div className='grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-16 '>
                    <div className='md:col-span-2 xl:col-span-1 flex flex-col items-center justify-start sm:p-4 xs:p-4'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-ligth/75'>Biography</h2>
                        <p className='font-medium'>
                            I am a passionate and dedicated full-stack developer with a love for creating innovative web applications that bring ideas to life. My journey in the world of programming began when I discovered my fascination with technology and its ability to transform concepts into reality.
                        </p>
                        <p className='my-4 font-medium'>
                            Throughout my career, I have honed my skills in both front-end and back-end development, allowing me to craft seamless user experiences while ensuring robust functionality behind the scenes. I thrive on challenges and have a proven track record of turning complex problems into elegant solutions.
                        </p>
                        <p className='font-medium'>
                            When I&apos;m not coding, you can find me exploring new technologies, working on personal projects, and collaborating with fellow developers. My mission is to continue growing and contributing to the tech community while pushing the boundaries of what&apos;s possible in web development.
                        </p>
                    </div>
                    <div className='md:col-span-2 xl:col-span-2 flex justify-center items-center'>
                        <div className='w-full md:w-2/3 lg:w-2/4 xl:w-3/4'>
                            <Image
                                src={aboutPicture}
                                alt='about-image'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={imageStyle}
                                ref={ref}
                                priority
                                className='sm:w-3/4 xs:w-1/2 mx-auto'
                            />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default About;
