import { SquareChevronRightIcon } from "lucide-react";
import { motion } from "framer-motion";

const ExpTab = ({
  heading,
  info,
  delay,
  link,
}: {
  heading: String;
  info: String;
  delay: number;
  link: string;
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
    >
      <div className=" p-6  bg-black text-white  w-full rounded-md space-y-3">
        <p className="font-semibold text-xl md:text-3xl">{heading}</p>
        <p>{info}</p>
        <a
          className="p-2 rounded-md btn btn-outline btn-active hover:border-2 hover:border-white "
          href={link}
          target="_blank"
        >
          View Certificate
          <SquareChevronRightIcon></SquareChevronRightIcon>
        </a>
      </div>
    </motion.div>
  );
};
export default ExpTab;
