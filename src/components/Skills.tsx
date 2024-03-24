import { skills } from "./iterators";

const Skills = () => {
  return (
    <div className="flex items-center my-10 flex-col" id="Skills">
      <p className="sora text-3xl">
        MY <span className="font-bold"> SKILLS</span>
      </p>
      <div
        className="w-[80%] 3
       my-5 grid grid-cols-2 p-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10"
      >
        {skills.map(({ src, name, learning }, id) => {
          return (
            <div
              className={`${learning ? "tooltip" : ""}`}
              data-tip="learning..."
              key={id}
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
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
