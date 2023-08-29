import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import aboutPicture from '../../public/images/about-BW-Slash7.jpg';
import Image from 'next/image';
import { useState } from 'react';

const About = () => {
    const [isHovered, setIsHovered] = useState(false);

    const imageStyle = {
        borderRadius: 32,
        overflow: 'hidden',
        transform: `rotate(${isHovered ? 0 : 10}deg)`,
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer'
    };

    return (
        <Layout className='pt-1'>
            <main id='about' className='flex w-full flex-col items-center justify-center' style={{ paddingTop: "100px" }}>
                <AnimatedText text='Passion Fuels Purpose' className='mb-16' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-center justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                            I am a passionate and dedicated full-stack developer with a love for creating innovative web applications that bring ideas to life. My journey in the world of programming began when I discovered my fascination with technology and its ability to transform concepts into reality.
                        </p>
                        <p className='my-4 font-medium'>
                            Throughout my career, I have honed my skills in both front-end and back-end development, allowing me to craft seamless user experiences while ensuring robust functionality behind the scenes. I thrive on challenges and have a proven track record of turning complex problems into elegant solutions.
                        </p>
                        <p className='font-medium'>
                            When I'm not coding, you can find me exploring new technologies, working on personal projects, and collaborating with fellow developers. My mission is to continue growing and contributing to the tech community while pushing the boundaries of what's possible in web development.
                        </p>
                    </div>
                    <div className='col-span-4 flex justify-center items-center'>
                        <div style={{ marginLeft: '20px' }}>
                            <Image
                                src={aboutPicture}
                                alt='about-image'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={imageStyle}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default About;
