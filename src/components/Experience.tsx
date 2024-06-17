const Experience = () => {
  return (
    <div>
      <div className="mx-auto sora text-4xl w-full font-semibold flex justify-center">
        Experience
      </div>
      <div className="w-full flex items-center p-5 flex-col border border-black mt-3 space-y-3">
        <div className="sora text-black text-3xl">Job Simulations</div>
        <div className=" w-[95%] md:w-[50%] bg-black p-3 px-5">
          <div className="flex items-center">
            <div className="sora text-3xl text-white">Accenture</div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="space-y-3 my-3 flex-1">
              <div className="sora text-white pl-10">
                <a href="https://drive.google.com/file/d/1SIcwgquWfVIvYKoKYn7f_J6YC4OqJ1Ay/view">
                  {" "}
                  Development & Advanced Engineering
                </a>
              </div>
              <div className="sora text-white pl-10">
                <a href="https://drive.google.com/file/d/1924BWrcUVnShBGpHy8wF96Z4rp3BC3fC/view">
                  Developer and Technology
                </a>
              </div>
            </div>
            <div className="bg-white flex-1 p-5 rounded-md">
              During this job stimulation i was exposed to many new concepts
              learn many software Fundamental principles and Basics Of Java
              Spring Boot and completed around 15 tasks.
            </div>
          </div>
        </div>
        <div className=" w-[95%] md:w-[50%] bg-black p-3 px-5 ">
          <div className="flex items-center">
            <div className="sora text-3xl text-white">Skyscanner</div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="space-y-3 my-3 flex-1">
              <div className="sora text-white pl-10">
                <a href="https://drive.google.com/file/d/1HlbjibPh1pLSVvmpd_9f3bhTZ3aWKMHy/view">
                  {" "}
                  Front-End Software Engineering
                </a>
              </div>
            </div>
            <div className="bg-white flex-1 p-5 rounded-md">
              Backpack is like a component library created by Skyscanner created
              a simple calender app using their builtin component in React
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
