import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui";
import { Btech, HS, SHS } from "@/components/sections/education";
import { scrollReveal } from "@/components/animations/scrollReveal";

type EducationTab = "btech" | "shs" | "hs";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<EducationTab>("btech");

  const tabs: { id: EducationTab; label: string }[] = [
    { id: "btech", label: "Graduation" },
    { id: "shs", label: "Secondary High School" },
    { id: "hs", label: "High School" },
  ];

  return (
    <section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <motion.div {...scrollReveal(0.1)}>
        <SectionTitle title="Background" titleNo="02" />
      </motion.div>
      <motion.div {...scrollReveal(0.2)} className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-60 flex flex-col" role="tablist" aria-label="Education background tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <li key={tab.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`education-panel-${tab.id}`}
                  id={`education-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    isActive ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
                  } w-full text-left border-l-2 bg-transparent hover:bg-cardColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
        <div
          role="tabpanel"
          id={`education-panel-${activeTab}`}
          aria-labelledby={`education-tab-${activeTab}`}
          className="w-full"
        >
          {activeTab === "btech" && <Btech />}
          {activeTab === "shs" && <SHS />}
          {activeTab === "hs" && <HS />}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
