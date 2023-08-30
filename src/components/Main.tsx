import Layout from "@/components/Layout"
import Image from "next/image"
import profilePicture from "../../public/images/draw_bg_black.png"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import { ExternalLink, FullStackDeveloperIcon } from "@/components"
import whiteProfilePicture from '../../public/images/profile_draw_bg_white.png'

export default function Main() {
  return (
    <Layout className='pt-52'>
      <div className="flex items-center justify-between w-full text-dark dark:text-ligth">
        <div className="relative w-1/2">
          <FullStackDeveloperIcon className='animate-spin-slow fill-dark dark:fill-ligth' style={{ position: "absolute", top: -55, left: -2, zIndex: 1 }} />
          <Image src={profilePicture} alt="BenjaLaValla" className="w-4/5 h-auto rounded-full mx-auto" style={{ overflow: "hidden", border: 2, zIndex: 0 }} />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center pl-8">
          <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left" />
          <p className="my-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my work and experience.
          </p>
          <div className="flex items-center self-start mt-2">
            <Link href="/public/documents/cv.pdf" target={"_blank"} className="flex items-center bg-dark text-ligth p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-ligth hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-ligth dark:text-dark hover:dark:bg-dark hover:dark:text-ligth hover:dark:border-ligth" download={true}>CV<ExternalLink className={"w-6 ml-1"} /></Link>
            <Link href="mailto:benjalavalla8@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-ligth">Contact</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
