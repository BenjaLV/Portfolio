import Main from "@/components/Main"
import About from "@/components/About"
import Technologies from "@/components/Technologies"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <>
      <Main />
      <div className="mb-8" />
      <About />
      <Technologies />
      <Projects />
    </>
  )
}
