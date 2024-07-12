const ExpTab = ({
  heading,
}: {
  heading: String;
  info: String;
  btnName: String;
}) => {
  return (
    <div className="w-[100%] h-[40vh] md:w-[70%] md:h-[30vh] bg-black p-3">
      <div className="badge py-6 font-semibold text-xl md:text-3xl">
        {heading}
      </div>
    </div>
  );
};
export default ExpTab;
