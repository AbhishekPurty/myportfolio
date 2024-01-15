import LeftSide from '@/components/LeftSide'
import Navbar from '@/components/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Abhishek Purty</title>
      <link rel="icon" href="/logo.ico" />
    </Head>
    <div className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>
        <div></div>
        <div>
        </div>
      </div>
    </div>
    </>
  )
}
