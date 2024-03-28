import heroimg from "../assets/heroImg.png";
import { links } from "./iterators";
import download from "../assets/download.png";

const Hero = () => {
  return (
    <>
      <div
        className="flex flex-col flex-col-reverse md:flex-row mt-4 p-3 relative"
        id="Hero"
      >
        <div className="flex-1 flex justify-center items-center">
          <div className="sora text-xl md:text-3xl p-4  flex items-center flex-col ">
            <p className="mb-10">
              <span className="">Greetings, Fellow Tech</span>{" "}
              <span className="  font-bold sora">Enthusiast!</span>
            </p>

            <p className="text-sm leading-6 md:text-xl text-zinc-600 md:leading-8 line-clamp-[10]">
              I'm{" "}
              <span className="font-semibold text-zinc-700">
                DHANUSH KUMAR M
              </span>
              , a passionate web developer fueled by a relentless curiosity for
              all things digital. With a solid foundation in coding languages
              such as HTML, CSS, and JavaScript, I embark on each project with a
              sense of excitement and determination. My journey in web
              development has been marked by a dedication to continuous learning
              and a drive to push the boundaries of creativity and innovation.
              From crafting sleek and responsive designs to optimizing user
              experiences, I thrive on the challenges that come with building
              dynamic web solutions. With a keen eye for detail and a commitment
              to excellence, I strive to create digital experiences that not
              only meet but exceed expectations. Join me as we explore the
              ever-evolving landscape of technology together.
            </p>

            <div className="mt-10  flex gap-4 flex-wrap">
              {links.map(({ src, to }, id) => {
                return (
                  <a
                    href={to}
                    className="btn group hover:bg-zinc-800"
                    target="_blank"
                    key={id}
                  >
                    <img
                      src={src}
                      className="w-6 h-6 group-hover:invert"
                      width={500}
                      height={600}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-1 border-b-2 border-black mb-3 md:border-0">
          <img src={heroimg} alt="" />
        </div>
      </div>
      <a
        href="#"
        className="fixed btn btn-circle bg-primary group right-10 bottom-2 hidden md:flex"
      >
        <img
          src={download}
          alt=""
          className="invert group-hover:invert-0 rotate-180 "
        />
      </a>
    </>
  );
};
export default Hero;
