import { useState } from "react";
import about from "../assets/about.svg";
import { motion } from "framer-motion";
const About = () => {
  const [readMore, setRead] = useState(true);
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
      <div className=" flex flex-1 flex-col  ">
        <p className="mx-auto font-bold text-3xl sora mb-2 ">ABOUT ME</p>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p
            className={`text-sm leading-6 md:text-xl text-zinc-600 md:leading-8 px-3 md:px-10  ${
              !readMore ? "" : " transition-all opacity-100"
            }`}
          >
            {" "}
            Im a CS Undergrad at{" "}
            <a href="https://sambhramit.com/" target="_blank">
              Sambhram Institute Of Technology.
            </a>
            {"  "}
            Im a Freshman to the relm of Computer science . I always has been
            overwhelmed By looking at some one coding in vim or solving a DSA
            problem less than 15 mins and more things. But still i have
            determined to learn the concepts and stop being overwhelmed by
            looking someone.
            <br></br>
            from<br></br> Buffering to Buliding...<br></br> Hoofing to
            Hoisting... <br />I have came a long way and have a long journey to
            be a good Software Engineer and im damn sure i'm gonna be a good
            Software Engineer one day...!!
          </p>
          <span
            className="link text-xs sr-only"
            onClick={() => {
              setRead((prev) => !prev);
            }}
          >
            Show {!readMore ? "Less" : "More"}
          </span>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
