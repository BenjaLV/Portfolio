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
        <article className="relative">
            <Link href={link} target={'_blank'}>
                <Image
                    src={img}
                    alt={title}
                    width={400}
                    height={300}
                    className={`w-full h-auto ${isHovered ? 'opacity-75' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </Link>
            <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-75 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100 ">
                <p className="text-white text-center">{summary}</p>
                
            </div>
            <div className="absolute inset-x-0 top-0 flex items-center justify-center w-full">
                <Link href={link} target={'_blank'}>
                    <h2 className="text-lg font-bold text-black hover:underline">{title}</h2>
                </Link>
            </div>
        </article>
    );
};

export default FeauturedProject;
