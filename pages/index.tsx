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
    </div>
    </>
  )
}
