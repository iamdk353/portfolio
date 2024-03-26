const Project = ({
  name,
  desc,
  live,
  source,
}: {
  name: string;
  desc: string;
  live: string;
  source: string;
}) => {
  return (
    <div className="collapse bg-base-200 w-[90%] md:w-[50%] mx-auto">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{name}</div>
      <div className="collapse-content">
        <div className="space-y-3">
          {desc}
          <div className="flex flex-col md:flex-row mt-3">
            <a href={live} className="btn btn-outline">
              Visit
            </a>
            <a href={source} className="btn btn-outline md:ml-3 mt-3 md:mt-0">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
