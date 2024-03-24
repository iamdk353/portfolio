import working from "../assets/working.svg";
import Project from "./Project";
const Projects = () => {
  return (
    <div className=" flex items-center flex-col mt-4" id="Projects">
      <p className="sora  text-4xl">
        My
        <span className="font-bold"> Projects</span>
      </p>
      <div className="flex flex-col ">
        <Project />
        <img src={working} alt="" />
      </div>
    </div>
  );
};
export default Projects;
