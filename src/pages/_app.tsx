import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head';
import '@/styles/globals.css'

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
      <main className={`${montserrat.variable} font-mont bg-ligth w-full min-h-screen`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
