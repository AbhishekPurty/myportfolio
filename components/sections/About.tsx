import { AiFillThunderbolt } from "react-icons/ai";
import { SectionTitle } from "@/components/ui";

const technologies = [
  "HTML",
  "Tailwind CSS",
  "JavaScript",
  "React.js",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Express.js",
  "SQL",
  "MongoDB",
];

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Abhishek Purty, and I enjoy creating things that live on the internet.
            My interest in web development started in 2019, when I began my B.Tech journey. My
            friends and I used to build web applications with different tech stacks to explore new
            tools and frameworks. That is when I developed a strong interest in programming and
            software development.
          </p>
          <p>
            Fast-forward to today, I have built several web applications and am currently looking for
            new opportunities. I adapt quickly to new tools and frameworks, and I enjoy learning as I
            build. I also value teamwork and collaboration, and my experience in group projects and
            coding competitions has helped me contribute effectively in team environments.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
