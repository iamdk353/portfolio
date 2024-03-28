import Skill from "./Skill";
import { sorted } from "./iterators";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex items-center my-10 flex-col " id="Skills">
      <p className="sora text-3xl mb-10">
        MY <span className="font-bold"> SKILLS</span>
      </p>
      <div className=" flex flex-wrap w-full justify-around gap-2 p-3 md:p-5">
        {sorted.map((i, id) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: id * 0.1 }}
              key={id}
            >
              <div
                className={i.learning ? "tooltip" : ""}
                data-tip="Learning..."
              >
                <Skill name={i.name} src={i.src} learning={i.learning} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
