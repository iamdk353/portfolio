const ExpTab = ({
  heading,
}: {
  heading: String;
  info: String;
  btnName: String;
}) => {
  return (
    <div className="badge py-6 font-semibold text-xl md:text-3xl">
      {heading}
    </div>
  );
};
export default ExpTab;
