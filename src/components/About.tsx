import Head from 'next/head';
import React from 'react';
import Layout from './Layout';
import AnimatedText from './AnimatedText';
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
    };
    return (
        <>

            <main id='about' className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text='Passion Fuels Purpose' className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-center justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident vel odit modi deserunt dicta ea beatae tempore? Debitis, harum expedita. Maxime earum corporis similique ipsam magni quidem sit quibusdam asperiores.
                            </p>
                            <p className='my-4 font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quidem labore quae consequatur praesentium voluptates ratione eius, error facere maxime debitis expedita voluptas pariatur necessitatibus illum officiis vel nemo. Nesciunt.
                            </p>
                            <p className='font-medium'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat delectus perspiciatis, numquam rerum fugiat totam tenetur voluptates minus, distinctio esse necessitatibus ullam! Officiis deserunt ut quis, placeat laborum eveniet inventore.
                            </p>
                        </div>
                        <div className='col-span-5'>
                            <Image src={aboutPicture}
                                alt='about-image'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={imageStyle} />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default About;
