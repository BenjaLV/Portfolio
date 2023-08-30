import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-ligth dark:border-ligth'>
            <Layout className='py-8 flex items-center justify-between'>
                <div className="flex items-center">
                    <span>Build by&nbsp;</span>
                    <Link href="https://github.com/BenjaLV" target='_blank' className='underline underline-offset-2 text-primary dark:text-secondary'>Benjamín La Valla</Link>
                </div>
                <span>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</span>
            </Layout>
        </footer>
    );
}

export default Footer;
