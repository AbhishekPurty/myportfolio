import { useState } from 'react'
import SectionTitle from './SectionTitle'
import Btech from './works/Btech'
import HS from './works/HS'
import SHS from './works/SHS'

const Experience = () => {
    const [workBTECH, setWorkBTECH] = useState(true);
    const [workSHS, setWorkSHS] = useState(false);
    const [workHS, setWorkHS] = useState(false);

    const handleBtech = () => {
        setWorkBTECH(true);
        setWorkSHS(false);
        setWorkHS(false);
    };

    const handleSHS = () => {
        setWorkBTECH(false);
        setWorkSHS(true);
        setWorkHS(false);
    };

    const handleHS = () => {
        setWorkBTECH(false);
        setWorkSHS(false);
        setWorkHS(true);
    };

  return (
    <section
        id="experience"
        className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Background" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
            <li 
                onClick={handleBtech}
                className={`${
                    workBTECH
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Graduation
            </li>
            <li 
                onClick={handleSHS}
                className={`${
                    workSHS
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Secondary High School
            </li>
            <li 
                onClick={handleHS}
                className={`${
                    workHS
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    High School
            </li>
        </ul>
        {workBTECH && <Btech />}
        {workSHS && <SHS />}
        {workHS && <HS />}
      </div>
    </section>
  )
}

export default Experience
