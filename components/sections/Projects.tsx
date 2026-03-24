import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { bitImg, tidbitsImg, vedexImg } from "@/public/assets";
import { SectionTitle } from "@/components/ui";
import { scrollReveal } from "@/components/animations/scrollReveal";

interface Project {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  liveUrl: string;
  githubUrl: string;
  description: string;
  techStack: string[];
  reverse?: boolean;
}

const projects: Project[] = [
  {
    title: "BIT Connect",
    image: bitImg,
    imageAlt: "BIT Connect project screenshot",
    liveUrl: "https://bit-connect.vercel.app/",
    githubUrl: "https://github.com/AbhishekPurty/bit-connect-main",
    description:
      "A full stack social media website built with TypeScript and Next.js. It uses NextAuth for authentication, MongoDB as the database, and bcrypt for password encryption.",
    techStack: ["Next.js", "TypeScript", "NextAuth", "Bcrypt", "Vercel deployment"],
  },
  {
    title: "Vedex",
    image: vedexImg,
    imageAlt: "Vedex project screenshot",
    liveUrl: "https://blog-v2-0.vercel.app/",
    githubUrl: "https://github.com/AbhishekPurty/Blog-v2.0",
    description:
      "Built with React.js, Next.js, and Tailwind CSS. The platform is fully responsive and includes a content management workflow with featured posts, categories, markdown articles, author information, and comments.",
    techStack: ["React.js", "Next.js", "GraphQL", "GraphCMS", "Vercel deployment"],
    reverse: true,
  },
  {
    title: "Tidbits",
    image: tidbitsImg,
    imageAlt: "Tidbits project screenshot",
    liveUrl: "http://tidbits.rf.gd/",
    githubUrl: "https://github.com/AbhishekPurty/Cosmic",
    description:
      "A dynamic blogging website with user/session authentication, login/logout, and content publishing features. Built with HTML, CSS, JavaScript, SQL, and vanilla PHP.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const reverse = Boolean(project.reverse);

  return (
    <div className={`flex flex-col ${reverse ? "xl:flex-row-reverse" : "xl:flex-row"} gap-6`}>
      <a
        className="w-full xl:w-1/2 h-auto relative group"
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <Image className="w-full h-full object-contain" src={project.image} alt={project.imageAlt} />
        </div>
      </a>
      <div
        className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10 ${
          reverse ? "" : "xl:-ml-16"
        }`}
      >
        <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p
          className={`bg-cardColor text-sm md:text-base p-2 md:p-6 rounded-md ${
            reverse ? "xl:-mr-16" : ""
          }`}
        >
          {project.description}
        </p>
        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="text-2xl flex gap-4">
          <a
            className="hover:text-textGreen duration-300"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
          >
            <TbBrandGithub />
          </a>
          <a
            className="hover:text-textGreen duration-300"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
          >
            <RxOpenInNewWindow />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <motion.div {...scrollReveal(0.1, 0.2)}>
        <SectionTitle title="Some Things I Have Built" titleNo="03" />
      </motion.div>
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            {...scrollReveal(0.15 + index * 0.1, 0.25)}
            className="w-full flex flex-col items-center justify-center gap-28 mt-10"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
