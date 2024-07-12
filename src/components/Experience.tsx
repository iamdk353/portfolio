import ExpTab from "./ExpTab";

const Experience = () => {
  return (
    <div>
      <div className="mx-auto sora text-4xl w-full font-semibold flex justify-center">
        Experience
      </div>
      <div className="w-full flex items-center p-5 flex-col border border-black mt-3 space-y-3  justify-center ">
        <div className="sora text-black text-3xl ">Job Simulations</div>
        <ExpTab
          heading={"SkyScanner"}
          info={"this is a info page where info is stored"}
          btnName={"Advance engineering"}
        />
      </div>
    </div>
  );
};
export default Experience;
