import about from "../assets/about.svg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="flex p-5 gap-10 flex-col md:flex-row" id="About">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className=" ">
          <img src={about} alt="" className="" />
        </div>
      </motion.div>
      <div className=" flex flex-1 flex-col justify-center">
        <p className="mx-auto font-bold text-3xl sora mb-2 ">ABOUT ME</p>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div
            className={`text-sm leading-6 md:text-xl text-zinc-600 md:leading-8 px-3 md:px-10  cursor-default text-justify
              
              `}
          >
            {" "}
            Im a CS Undergrad at Sambhram Institute Of Technology.
            {"  "}
            Im a Freshman to the relm of Computer science. Always facinated by
            new Technology . Dedicated and Determinated to code
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
