import { useState } from "react"
import Layout from "@/components/Layout"
import Image from "next/image"
import profilePicture from "../../public/images/draw_bg_black.png"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import { ExternalLink, FullStackDeveloperIcon } from "@/components"

export default function Main() {
  const [downloadError, setDownloadError] = useState(false);

  const handleDownload = () => {
    const url = "/documents/cv.pdf";
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "cv.pdf";
        a.click();
        window.URL.revokeObjectURL(url);
        setDownloadError(false);
      })
      .catch((error) => {
        console.error("Error al descargar el archivo:", error);
        setDownloadError(true);
      });
  };

  return (
    <Layout className='!pt-16 xl:!pt-28 md:pt-16 sm:pt-8'>
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
          <AnimatedText text="Turning Vision into Reality: Full Stack Development into Action." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-2xl xs:!text-2xl" />
          <p className="my-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my work and experience.
          </p>
          <div className="flex items-center self-start mt-2 lg:self-center sm:ml-52 sm:flex-row xs:ml-32 xs:flex-col">
            <Link href="#" onClick={handleDownload} className="flex items-center bg-dark text-ligth p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-ligth hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-ligth dark:text-dark hover:dark:bg-dark hover:dark:text-ligth hover:dark:border-ligth">
              CV<ExternalLink className="w-6 ml-1" />
            </Link>
            {downloadError && <p>Error al descargar el archivo. Inténtalo de nuevo más tarde.</p>}
            <Link href="mailto:benjalavalla8@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-ligth xs:p-2 xs:ml-1">Contact</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
