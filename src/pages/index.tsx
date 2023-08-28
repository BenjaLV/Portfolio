import Navbar from "@/components/Navbar"
import Layout from "@/components/Layout"
import Image from "next/image"
import profilePicture from "../../public/images/color-redondo.png"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import { ExternalLink, FullStackDeveloperIcon } from "@/components"
import About from "@/components/About"

export default function Home() {
  return (
    <>
      <main id="home" className='flex item-center text-dark w-full min-h-screen'>
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <div className="relative">
                <FullStackDeveloperIcon className='animate-spin-slow' style={{ color: "black", position: "absolute", top: 4, left: -4 }} />
                <Image src={profilePicture} alt="BenjaLaValla" className="w-full h-auto" style={{ overflow: "hidden", border: 2 }} />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Desingn." className="!text-6xl !text-left" />
              <p className="my-4 text-base font-medium">
                As a skilledfull-stack developer, I am dedicated to turning ideas to innovate web applications. Explore my work and experience.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link href="/" target={"_blank"} className="flex items-center bg-dark text-ligth p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-ligth hover:text-dark border-2 border-solid border-transparent hover:border-dark" download={true}>CV <ExternalLink className={"w-6 ml-1"} /> </Link>
                <Link href="mailto:benjalavalla8@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline ">Contact</Link>
              </div>
            </div>
          </div>
          <About />
        </Layout>
      </main>
    </>
  )
}
