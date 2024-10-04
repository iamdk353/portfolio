import gsap from "gsap";
import { useEffect } from "react";
import Project from "./Project";
import ProjectAnimator from "./ProjectAnimator";
const Projects = () => {
  useEffect(() => {
    writeCode();
    runGears();
  }, []);
  function runGears() {
    gsap.fromTo(
      "#gear1",
      {
        rotation: 0,
      },
      { rotation: 360, transformOrigin: "50% 50%", repeat: -1, duration: 2 }
    );
    gsap.fromTo(
      "#gear2",
      {
        rotation: 360,
      },
      { rotation: 0, transformOrigin: "50% 50%", repeat: -1, duration: 2 }
    );
    gsap.fromTo(
      "#gear3",
      {
        rotation: 0,
      },
      {
        rotation: 360,
        transformOrigin: "50% 50%",
        repeat: -1,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#buildText",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, repeat: -1, duration: 1, yoyo: true }
    );
  }
  function writeCode() {
    gsap.fromTo(
      "#code1",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, repeat: -1, yoyo: true }
    );
    gsap.fromTo(
      "#code2",
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, repeat: -1, yoyo: true, delay: 0.5 }
    );
    gsap.fromTo(
      "#code3",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, repeat: -1, yoyo: true, delay: 0.2 }
    );
    gsap.fromTo(
      "#code4",
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, repeat: -1, yoyo: true, delay: 1 }
    );
    gsap.fromTo(
      "#code5",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, repeat: -1, yoyo: true, delay: 5 }
    );
  }

  return (
    <div
      className=" flex items-center flex-col mt-4 my-[10vh] space-y-3"
      id="Projects"
    >
      <p className="sora  text-4xl my-5">
        My
        <span className="font-bold"> Projects</span>
      </p>
      <div className="w-full bg-primary p-5 space-y-3">
        <Project
          name="AI Recipie Generator"
          desc="This is a mini project that uses AI and generates reicpies"
          live="https://ai-recipie.vercel.app/"
          source="https://github.com/iamdk353/Ai-recipie"
          projNum={3}
        ></Project>
        <Project
          name="A Circular mailing system "
          desc="This is a side projects that uses webscrapping and Gmail to notify the subscribed users regaurding the latest circular that has been released in the VTU website"
          live="https://vtu-frontend-dhanush-kumars-projects.vercel.app/"
          source="https://github.com/iamdk353/VTU-frontend"
          projNum={0}
        ></Project>
        <Project
          name={"Real time accident detection and notification system"}
          desc={
            "This is our hackthon project,It is a real time accident detection and notification system that detects accident from cctv footage and  updates about the accident in our website and further it  is notified to near by ambulance drivers "
          }
          live={"nolive"}
          source={"https://github.com/iamdk353/accidentDetector"}
          isHackthon={true}
          projNum={1}
        >
          <div className="">Hackthon</div>
        </Project>
        <Project
          name={"Personal Portfolio"}
          desc={
            "This is my personal portfolio where I share my skills, experience,projects,and many more.. "
          }
          live={"#"}
          source={"https://github.com/iamdk353/portfolio"}
          projNum={2}
        />
      </div>
      <div className="flex flex-col ">
        <ProjectAnimator />
      </div>
    </div>
  );
};

export default Projects;
