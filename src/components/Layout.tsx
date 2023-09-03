import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface Props {
    children: ReactNode;
    className?: string;
}

const Layout = ({ children, className = '' }: Props) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-ligth dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-16 ${className}`}>
            {children}
        </div>
    );
}

export default Layout;