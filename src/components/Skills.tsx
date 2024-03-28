import Skill from "./Skill";
import { skills } from "./iterators";
// import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex items-center my-10 flex-col " id="Skills">
      <p className="sora text-3xl mb-10">
        MY <span className="font-bold"> SKILLS</span>
      </p>
      <div className=" flex flex-wrap w-full justify-around gap-2 p-3 md:p-5">
        {skills.map((i, id) => {
          return (
            <Skill name={i.name} src={i.src} key={id} learning={i.learning} />
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
