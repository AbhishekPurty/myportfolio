import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti";

const Btech = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.1 }}
        className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        BTECH <span className="text-textGreen tracking-wide">@Birla Institue of Technology</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2019 - May 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Information Technology
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            7.50/10.00 GPA
        </li>
      </ul>
    </motion.div>
  )
}

export default Btech
