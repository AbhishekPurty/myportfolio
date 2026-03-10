import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

interface EducationItemProps {
  title: string;
  institution: string;
  duration: string;
  highlights: string[];
}

const EducationItem = ({ title, institution, duration, highlights }: EducationItemProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {title} <span className="text-textGreen tracking-wide">@{institution}</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">{duration}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {highlights.map((highlight) => (
          <li key={highlight} className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            {highlight}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default EducationItem;
