const Project = ({
  name,
  desc,
  live,
  source,
  isHackthon = false,
  children,
}: {
  name: string;
  desc: string;
  live: string;
  source: string;
  isHackthon?: boolean;

  children?: React.ReactNode;
}) => {
  return (
    <>
      <div className={`collapse bg-base-200 w-[90%] md:w-[50%] mx-auto `}>
        <input type="checkbox" />

        <div
          className={`collapse-title text-xl font-medium ${
            isHackthon ? "skeleton" : ""
          }`}
        >
          {name}
        </div>
        <div className={`collapse-content ${isHackthon ? "skeleton" : ""}`}>
          <div className="space-y-3">
            {desc}
            <div className="flex flex-col md:flex-row mt-3">
              <a
                href={live === "nolive" ? "" : live}
                className={
                  live === "nolive"
                    ? "btn  pointer-events-none opacity-70"
                    : "btn btn-outline"
                }
              >
                {live === "nolive" ? "No live Demo Availabel" : "Visit"}
              </a>
              <a href={source} className="btn btn-outline md:ml-3 mt-3 md:mt-0">
                Source Code
              </a>
              <a className="btn btn-ghost cursor-default md:ml-3 mt-3 md:mt-0 rounded-full">
                {children}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
