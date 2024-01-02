import React from 'react';
import Layout from './Layout';
import AnimatedText from './AnimatedText';
import FeaturedProject from './FeaturedProject';

const Projects = () => {
    return (
        <Layout className="pt-16">
            <main id='projects' className="w-full mb-16 flex flex-col items-center justify-center mt-12">
                <div className="mb-8">
                    <AnimatedText text="Coding Chronicles: Full Stack Feats!" className='lg:text-7xl md:text-6xl sm:text-4xl xs:text-3xl' />
                </div>
                <div className="grid grid-cols-12 gap-10 md:gap-12 sm:gap-7 xs:gap-6">
                    <div className="col-span-12 md:col-span-6 mb-16 md:mb-0">
                        <FeaturedProject
                            title="CEIBO-APP"
                            img="/images/all-devices-ceibo.png"
                            summary="Application to manage and administer the news of the projects of each client among the users of the company"
                            link="https://github.com/BenjaLV/CEIBO-APP"

                        />
                        <div className='relative my-8'>
                            <FeaturedProject
                                title="Model-Portfile"
                                img="/images/model-porfolio-img.png"
                                summary="A modern and minimalist portfolio built with Next Js"
                                link="https://benjalavalla-portfolio.vercel.app/"

                            />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Projects;
