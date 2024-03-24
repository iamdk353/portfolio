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
      <div className=" flex flex-1 flex-col ">
        <p className="mx-auto font-bold text-3xl sora mb-2">ABOUT ME</p>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="sora text-sm md:text-xl leading-8 md:leading-10 line-clamp-[13]">
            {" "}
            As a full-stack developer, my journey into the world of web
            development began in September 2023, and since then, I've been
            passionately crafting full-stack applications that marry
            functionality with elegant design. With a solid foundation in HTML,
            CSS, and JavaScript, I've delved into the intricacies of backend
            development using MongoDB, Node.js, and Express.js, building robust
            APIs and handling data with finesse. On the frontend, my proficiency
            extends to React.js, where I leverage its power to create dynamic
            and responsive user interfaces. Through continuous learning and
            exploration, I've honed my skills to architect seamless experiences
            that prioritize user engagement and satisfaction. As I embark on new
            projects, my commitment to excellence remains unwavering, driving me
            to push the boundaries of what's possible in the ever-evolving
            landscape of web development.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
