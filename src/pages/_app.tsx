import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head';
import '@/styles/globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-ligth dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
