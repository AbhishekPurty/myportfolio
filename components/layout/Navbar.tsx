import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";

interface NavItem {
  href: string;
  id: string;
  label: string;
  number?: string;
}

const navItems: NavItem[] = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About", number: "01." },
  { href: "#experience", id: "experience", label: "Experience", number: "02." },
  { href: "#project", id: "project", label: "Project", number: "03." },
  { href: "#contact", id: "contact", label: "Contact", number: "04." },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setShowMenu(false);
    }
  }

  const renderNavLinks = (isMobile: boolean) => (
    <ul className={isMobile ? "flex flex-col text-base gap-7" : "flex text-[13px] gap-7"}>
      {navItems.map((item, index) => {
        const isActive = activeSection === item.id;
        const animationProps = isMobile
          ? {
              initial: { x: 20, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 0.2, delay: 0.1 * (index + 1), ease: "easeIn" as const },
            }
          : {
              initial: { y: -10, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.1, delay: 0.1 * index },
            };

        return (
          <motion.li key={item.id} {...animationProps}>
            <Link
              href={item.href}
              onClick={(e) => handleScroll(item.id, e)}
              className={`flex items-center gap-1 font-medium cursor-pointer duration-300 ${
                isActive ? "text-textGreen" : "text-textDark hover:text-textGreen"
              }`}
            >
              {item.number && <span className="text-textGreen">{item.number}</span>}
              {item.label}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="w-40" src={logo} alt="logo" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          {renderNavLinks(false)}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 inline-flex"
            href="/assets/Abhishek_Purty_SDE.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </motion.a>
        </div>
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-cardColor flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                {renderNavLinks(true)}
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, ease: "easeIn" }}
                  className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 inline-flex items-center justify-center"
                  href="/assets/Abhishek_Purty_SDE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </motion.a>
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://github.com/AbhishekPurty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.85, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/abhishek-purty-07"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                </div>
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                href="mailto:abhishekpurty1999@gmail.com"
              >
                <p>abhishekpurty1999@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
