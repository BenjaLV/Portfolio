import Navbar from "@/components/Navbar"
import Layout from "@/components/Layout"
import Image from "next/image"
import profilePicture from "../../public/profile-picture.png"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex item-center text-dark w-full min-h-screen'>
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div>
              <Image src={profilePicture} alt="CodeBucks" className="w-full h-auto" />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
