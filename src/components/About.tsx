import about from "../assets/about.svg";
const About = () => {
  return (
    <div className="flex p-5 gap-10 mt-10 flex-col md:flex-row">
      <div className=" ">
        <img src={about} alt="" className="" />
      </div>
      <div className=" flex flex-1 flex-col ">
        <p className="mx-auto font-bold text-3xl sora">ABOUT ME</p>
        <p className="sora text-sm md:text-xl leading-8 md:leading-10 line-clamp-[15]">
          {" "}
          As a full-stack developer, my journey into the world of web
          development began in September 2023, and since then, I've been
          passionately crafting full-stack applications that marry functionality
          with elegant design. With a solid foundation in HTML, CSS, and
          JavaScript, I've delved into the intricacies of backend development
          using MongoDB, Node.js, and Express.js, building robust APIs and
          handling data with finesse. On the frontend, my proficiency extends to
          React.js, where I leverage its power to create dynamic and responsive
          user interfaces. Through continuous learning and exploration, I've
          honed my skills to architect seamless experiences that prioritize user
          engagement and satisfaction. As I embark on new projects, my
          commitment to excellence remains unwavering, driving me to push the
          boundaries of what's possible in the ever-evolving landscape of web
          development.
        </p>
      </div>
    </div>
  );
};
export default About;
