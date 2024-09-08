import heroimg from "../assets/heroImg.png";
import { links } from "./iterators";
import download from "../assets/download.png";

const Hero = () => {
  return (
    <>
      <div
        className="flex  flex-col-reverse md:flex-row mt-4 p-3 relative"
        id="Hero"
      >
        <div className="flex-1 flex justify-center items-center">
          <div className="sora text-xl md:text-3xl p-4  flex items-center flex-col ">
            <p className="mb-10">
              <span className="">Greetings, Fellow Tech</span>{" "}
              <span className="  font-bold sora">Enthusiast!</span>
            </p>

            <div>
              <p
                className={`text-sm leading-6 md:text-xl text-zinc-600 md:leading-8 text-justify`}
              >
                Hi, I'm{" "}
                <span className="font-semibold text-zinc-700">
                  DHANUSH KUMAR M
                </span>
                {"  "} a dedicated web developer with a solid grasp of coding
                principles, problem-solving strategies, and web development
                technologies. I'm driven to succeed as a Software Engineer and
                am focused on putting in the hard work and smart effort required
                to reach my goal.
              </p>
            </div>

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
