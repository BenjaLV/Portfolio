import Layout from "@/components/Layout"
import Image from "next/image"
import profilePicture from "../../public/images/draw_bg_black.png"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import { ExternalLink, FullStackDeveloperIcon } from "@/components"

export default function Main() {
  return (
    <Layout className='pt-0 md:pt-16 sm:pt-8'>
      <div id="home" className="flex md:flex-row sm:flex-col xs:flex-col items-center justify-between w-full text-dark dark:text-ligth mt-10">
        <div className="relative w-1/2">
          <div className=" md:hidden sm:hidden xs:hidden">
            <FullStackDeveloperIcon className="animate-spin-slow fill-dark dark:fill-ligth md:hidden" style={{ position: "absolute", top: -55, left: -2, zIndex: 1 }} />
          </div>
          <div className="sm:hidden xs:hidden">
          <Image src={profilePicture} alt="BenjaLaValla" className="w-4/5 h-auto rounded-full mx-auto md:inline-block md:w-full" style={{ overflow: "hidden", border: 2, zIndex: 0 }} priority />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center self-center pl-8 lg:flex-col sm:w-full xs:w-full sm:text-center xs:text-center">
          <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
          <p className="my-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my work and experience.
          </p>
          <div className="flex items-center self-start mt-2 lg:self-center sm:ml-52 sm:flex-row xs:ml-32 xs:flex-col">
            <Link href="/public/documents/cv.pdf" target={"_blank"} className="flex items-center bg-dark text-ligth p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-ligth hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-ligth dark:text-dark hover:dark:bg-dark hover:dark:text-ligth hover:dark:border-ligth" download={true}>CV<ExternalLink className={"w-6 ml-1"} /></Link>
            <Link href="mailto:benjalavalla8@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-ligth xs:p-2 xs:ml-1">Contact</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
