import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti";

const HS = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.1 }}
        className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Matriculation <span className="text-textGreen tracking-wide">@Andhra Association English School</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2016
      </p>
      <ul className="mt-6 flex flex-col gap-3">
      <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Indian Certificate of Secondary Education
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Science
        </li>
        <li className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            78.60/100 Percentage
        </li>
      </ul>
    </motion.div>
  )
}

export default HS
