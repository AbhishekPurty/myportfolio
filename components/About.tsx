import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
        id="about"
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"    
    >
      <SectionTitle title="About Me" titleNo="01"/>
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>
                Hello! My name is Abhishek Purty and I enjoy creating things that live on the internet. My interest in web developement started back in 2019 when I started my BTECH journey. Me and my friends used to build web application with different tech stacks to explore the different tools invented for building web applications. Thats where I got the urge to learn all kinds of computer languages.
            </p>
            <p>
                Fast-forward to today, and I had made few web app projects of my own and am currently looking to join an organization. I possess a strong ability to quickly adapt to new tools and frameworks. As an avid learner, I am excited about the opportunity to contribute my skills while expanding my knowledge in a professional setting. I understand the importance of collaborative teamwork in achieving project success. My experiences working on group projects and participating in coding competitions have prepared me to contribute effectively within a team environment.
            </p>
            <p>Here are a few technologies I have been working with recently:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    HTML
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    TailwindCSS
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    JavaScript
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    ReactJS
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    Typescript
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    Node.js
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    Next.js
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    Express.js
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    SQL
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                    </span>
                    MongoDB
                </li>
            </ul>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default About
