import React from 'react';
import { FullStackDeveloperIcon } from './Icons';

interface FullStackDeveloperProps {
    className?: string;
}

const FullStackDeveloper: React.FC<FullStackDeveloperProps> = ({ className }) => {
    return (
        <div className='fixed right-4 top-4 flex items-center justify-center overflow-hidden'>
            <div className='w-24 h-24 flex items-center justify-center relative'>
                <FullStackDeveloperIcon className={"fill-dark"} />
            </div>
        </div>
    );
};

export default FullStackDeveloper;
