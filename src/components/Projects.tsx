import React from 'react';
import Layout from './Layout';
import AnimatedText from './AnimatedText';
import FeaturedProject from './FeaturedProject';

const Projects = () => {
    return (
        <Layout className="pt-16">
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <div className="mb-8">
                    <AnimatedText text="Imagination Trumps Knowledge!" />
                </div>
                <div className="grid grid-cols-12 gap-6 md:gap-12">
                    <div className="col-span-12 md:col-span-6">
                        <FeaturedProject
                            title="CEIBO-APP"
                            img="/images/not-shadow-2.png"
                            summary="Application to manage and administer the news of the projects of each client among the users of the company"
                            link="https://github.com/BenjaLV/CEIBO-APP"
                        />
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Projects;