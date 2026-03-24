"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Footer, LeftSide, Loader, Navbar, RightSide } from "@/components/layout";
import { About, Banner, Contact, Experience, Projects } from "@/components/sections";
import animationData from "@/public/LoaderAnimation.json";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader animationData={animationData} />;
  }

  return (
    <div className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </motion.div>
        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-4 bottom-0"
        >
          <RightSide />
        </motion.div>
      </div>
    </div>
  );
}
