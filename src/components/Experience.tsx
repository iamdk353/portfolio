// import ExpTab from "./ExpTab";

import ExpTab from "./ExpTab";

const Experience = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-4xl font-semibold w-full flex justify-center mx-auto sora">
        Experience
      </div>
      <div className="w-[100%] h-[40vh] md:w-[70%] md:h-[30vh] bg-black p-3">
        <ExpTab
          heading={"Accenture"}
          info={"this is  infp"}
          btnName={"this is a btn name"}
        />
      </div>
    </div>
  );
};
export default Experience;
