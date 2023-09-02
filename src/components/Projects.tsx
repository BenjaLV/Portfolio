import React from 'react';
import Layout from './Layout';
import AnimatedText from './AnimatedText';
import FeaturedProject from './FeaturedProject';

const Projects = () => {
    return (
        <Layout className="pt-16">
            <main id='projects' className="w-full mb-16 flex flex-col items-center justify-center mt-12">
                <div className="mb-8">
                    <AnimatedText text="Imagination Trumps Knowledge!" className='lg:text-7xl md:text-6xl sm:text-4xl xs:text-3xl' />
                </div>
                <div className="grid grid-cols-12 gap-10 md:gap-12 sm:gap-7 xs:gap-6">
                    <div className="col-span-12 md:col-span-6 mb-10 md:mb-0">
                        <FeaturedProject
                            title="CEIBO-APP"
                            img="/images/all-devices-ceibo.png"
                            summary="Application to manage and administer the news of the projects of each client among the users of the company"
                            link="https://github.com/BenjaLV/CEIBO-APP"
                        
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 mb-10 md:mb-0" >
                        <FeaturedProject
                            title="PokemonApp"
                            img="/images/pokemon-desktop-2.png"
                            summary='Pokemon App built with NextJs, you can navigate among the 151 pokémons and select your favorites'
                            link='https://github.com/BenjaLV/pokemonStaticApp'
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 mb-10">
                        <FeaturedProject
                            title="MovieApp"
                            img="/images/movie-app-all-devices.png"
                            summary='Movies app built with React, adapted with a nextflix-like interface, consumes the TMDB api and you can add your favorite movies to your list'
                            link='https://github.com/BenjaLV/TMDB-Client-P5'
                        />
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Projects;
