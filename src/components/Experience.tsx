import ExpTab from "./ExpTab";

const Experience = () => {
  return (
    <div className="flex flex-col items-center space-y-2" id="experience">
      <p className="sora text-2xl font-bold">EXPERIENCE</p>
      <div className="w-full  p-4  grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-3">
        <ExpTab
          info={
            "conducted by Accenture where i learnt about Coding Developement and basic Engineering concepts and one more conducted by Skyscanner where i learnt about react in production"
          }
          heading={"Job Simulations"}
          delay={0}
          link="https://drive.google.com/drive/folders/1CYN0pqGUhNIsjUZuUOVvwk3eagXp_7vn?usp=drive_link"
        />
        <ExpTab
          info={
            "Passed the Role test conducted by Hacker Rank for Roles like FrontDeveloper and Rest api developer"
          }
          heading={"Tests"}
          delay={1}
          link="https://drive.google.com/drive/folders/1-zqQX5emiFHVvlhF-TWYC2oJKAPW26nM?usp=drive_link"
        ></ExpTab>
        <ExpTab
          info={
            "This sections contains certificates of the hackthons and ideathons i have participated"
          }
          heading={"Hackthons"}
          delay={2}
          link="https://drive.google.com/drive/folders/1m0se1VOdd1l68eEnBBcO7I-pIaW1my9b?usp=drive_link"
        ></ExpTab>
      </div>
    </div>
  );
};
export default Experience;
