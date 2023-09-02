import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    title: string;
    summary: string;
    img: string;
    link: string;
}

const FeauturedProject = ({ title, summary, img, link }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article className="relative mb-8 md:mb-16">
            <Link href={link} target={'_blank'}>
                <div className="relative w-full h-auto">
                    <Image
                        src={img}
                        alt={title}
                        layout="responsive"
                        width={400}
                        height={300}
                        className={`w-full h-auto sm:w-[75%] xs:w-[50%] mx-auto ${isHovered ? 'scale-95' : 'scale-100'} transition-transform duration-300`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
            </Link>

            <Link href={link} target={'_blank'}>
                <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-75 dark:bg-secondary dark:bg-opacity-75 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100 md:ml-4">
                    <p className="text-white text-center">{summary}</p>
                </div>
            </Link>
            <div className="absolute inset-x-0 bottom-[-1] flex items-center justify-center w-full md:mt-2">
                <h2 className="text-lg font-bold text-black dark:text-ligth">{title}</h2>
            </div>
        </article>
    );
};

export default FeauturedProject;
