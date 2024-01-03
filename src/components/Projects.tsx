import React from 'react';
import Layout from './Layout';
import AnimatedText from './AnimatedText';
import FeaturedProject from './FeaturedProject';

const Projects = () => {
    return (
        <Layout className="pt-10 mb-8">
            <main id='projects' className="w-full mb-4 flex flex-col items-center justify-center mt-12">
                <div className="mb-8">
                    <AnimatedText text="Coding Chronicles: Full Stack Feats!" className='lg:text-7xl md:text-6xl sm:text-4xl xs:text-3xl' />
                </div>
                <div className="flex flex-col space-y-14">

                    <FeaturedProject
                        title="CEIBO-APP"
                        img="/images/all-devices-ceibo.png"
                        summary="Application to manage and administer the news of the projects of each client among the users of the company"
                        link="https://github.com/BenjaLV/CEIBO-APP"

                    />

                    <FeaturedProject
                        title="Model-Portfile"
                        img="/images/model-porfolio-img.png"
                        summary="A modern and minimalist modeling portfolio built with Next Js"
                        link="https://benjalavalla-portfolio.vercel.app/"

                    />

                </div>
            </main>
        </Layout>
    );
};

export default Projects;
