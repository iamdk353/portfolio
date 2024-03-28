const Skill = ({
  src,
  name,
  learning,
}: {
  src: string;
  name: string;
  learning: Boolean;
}) => {
  return (
    <div
      className={`size-32 border border-black flex justify-center flex-col items-center cursor-default ${
        learning ? "opacity-60 tooltip" : ""
      }`}
    >
      <img src={src} alt="" className="size-[50%]" />
      <p className="mt-2">{name}</p>
    </div>
  );
};
export default Skill;
