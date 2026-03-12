import { motion } from "framer-motion";
import { scrollReveal } from "@/components/animations/scrollReveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <motion.p {...scrollReveal(0.1)} className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. Reach out to me
      </motion.p>
      <motion.h2 {...scrollReveal(0.2)} className="font-titleFont text-5xl font-semibold">
        Get In Touch
      </motion.h2>
      <motion.p {...scrollReveal(0.3)} className="max-w-[600px] text-center text-textDark">
        While I am in the early stages of my career and actively seeking new opportunities, I
        welcome any inquiries or messages. Whether you have a question, want to connect, or just say
        hi, feel free to reach out, and I will do my best to respond promptly!
      </motion.p>
      <motion.a
        {...scrollReveal(0.4)}
        href="mailto:abhishekpurty1999@gmail.com"
        className="w-40 h-14 mt-6 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wider hover:bg-hoverColor duration-300 inline-flex items-center justify-center"
      >
        Say Hello
      </motion.a>
    </section>
  );
};

export default Contact;
