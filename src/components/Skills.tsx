import { skills } from "./iterators";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="flex items-center my-10 flex-col my-[30vh]" id="Skills">
      <p className="sora text-3xl mb-10">
        MY <span className="font-bold"> SKILLS</span>
      </p>
      <div
        className="w-[80%] 
        grid grid-cols-2 p-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10"
      >
        {skills.map(({ src, name, learning }, id) => {
          return (
            <motion.div
              initial={{
                y: -10,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ delay: 0.3, duration: 0.5 }}
              key={id}
            >
              <div
                className={`${learning ? "tooltip" : ""}`}
                data-tip="learning..."
              >
                <div
                  className={`size-[15vh] bg-white flex flex-col p-2 justify-center items-center p-5 border-black border cursor-default ${
                    learning ? "opacity-70 animate-pulse " : ""
                  }`}
                >
                  <img src={src} alt={name + " icon"} className="size-10" />
                  <p className=" text-xs md:text-sm mt-2">{name}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
