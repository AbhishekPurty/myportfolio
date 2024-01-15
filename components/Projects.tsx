import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { bitImg, tidbitsImg, vedexImg } from '@/public/assets'
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section
        id="project"
        className="max-w-container mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title="Some things I have Built" titleNo='03' />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project one */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            <div className="flex flex-col xl:flex-row gap-6">
                <a 
                    className="w-full xl:w-1/2 h-auto relative group"
                    href="https://bit-connect.vercel.app/" 
                    target="_blank"
                >
                        <div>
                            <Image className="w-full h-full object-contain"
                            src={bitImg}
                            alt="bitImg"
                            />
                        </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Featured Project
                </p>
                <h3 className="text-2xl font-bold">BIT Connect</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A full stack social media website made using <span className="text-textGreen">TypeScript</span> and <span className="text-textGreen">NextJS</span>. Used <span className="text-textGreen">NextAuth</span> for user authentication, <span className="text-textGreen">MongoDB</span> for Database, <span className="text-textGreen">bcrypt</span> for password encryptions.
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                    <li>Nextjs</li>
                    <li>Typescript</li>
                    <li>Next-auth</li>
                    <li>Bcrypt</li>
                    <li>Vercel deployment</li>
                </ul>
                <div className="text-2xl flex gap-4">
                    <a
                        className="hover:text-textGreen duration-300" 
                        href="https://github.com/AbhishekPurty/bit-connect-main"
                        target="_blank"
                    >
                        <TbBrandGithub />
                    </a>
                    <a
                        className="hover:text-textGreen duration-300" 
                        href="https://bit-connect.vercel.app/"
                        target="_blank"
                    >
                        <RxOpenInNewWindow />
                    </a>
                </div>
                </div>
            </div>
        </div>
        {/* Project two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            <div className="flex flex-col xl:flex-row-reverse gap-6">
                <a 
                    className="w-full xl:w-1/2 h-auto relative group"
                    href="https://blog-v2-0.vercel.app/" 
                    target="_blank"
                >
                        <div>
                            <Image className="w-full h-full object-contain"
                            src={vedexImg}
                            alt="vedexImg"
                            />
                        </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Featured Project
                </p>
                <h3 className="text-2xl font-bold">Vedex</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                Built with the tech stack of <span className="text-textGreen">ReactJS</span>, <span className="text-textGreen">NextJS</span>, <span className="text-textGreen">Tailwind CSS</span>. This website is fully responsive and has a dedicated Content Management System. It has featured and recent posts, categories, full markdown articles, author information, comments, and much more.
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                    <li>Reactjs</li>
                    <li>Nextjs</li>
                    <li>GraphQL</li>
                    <li>GraphCMS</li>
                    <li>Vercel deployment</li>
                </ul>
                <div className="text-2xl flex gap-4">
                    <a
                        className="hover:text-textGreen duration-300" 
                        href="https://github.com/AbhishekPurty/Blog-v2.0"
                        target="_blank"
                    >
                        <TbBrandGithub />
                    </a>
                    <a
                        className="hover:text-textGreen duration-300" 
                        href="https://blog-v2-0.vercel.app/"
                        target="_blank"
                    >
                        <RxOpenInNewWindow />
                    </a>
                </div>
                </div>
            </div>
        </div>
        {/* Project three */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            <div className="flex flex-col xl:flex-row gap-6">
                <a 
                    className="w-full xl:w-1/2 h-auto relative group"
                    href="http://tidbits.rf.gd/" 
                    target="_blank"
                >
                        <div>
                            <Image className="w-full h-full object-contain"
                            src={tidbitsImg}
                            alt="tidbitsImg"
                            />
                        </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                    Featured Project
                </p>
                <h3 className="text-2xl font-bold">Tidbits</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A fully functional, dynamic blogging website with user and session authentication, login/logout and posting content features. Made with a tech stack of <span className="text-textGreen">HTML</span>, <span className="text-textGreen">CSS</span>, <span className="text-textGreen">JavaScript</span>, <span className="text-textGreen">SQL</span> and <span className="text-textGreen">Vanilla PHP</span>.
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>SQL</li>
                </ul>
                <div className="text-2xl flex gap-4">
                    <a
                        className="hover:text-textGreen duration-300" 
                        href="https://github.com/AbhishekPurty/Cosmic"
                        target="_blank"
                    >
                        <TbBrandGithub />
                    </a>
                    <a
                        className="hover:text-textGreen duration-300" 
                        href="http://tidbits.rf.gd/"
                        target="_blank"
                    >
                        <RxOpenInNewWindow />
                    </a>
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
