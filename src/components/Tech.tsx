import { motion } from "framer-motion";
import { techItr } from "./iterators";
const Tech = ({ projNo }: { projNo: number }) => {
  return (
    <div className="flex">
      {techItr[projNo].map((i, id) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: id * 0.1 }}
            key={id}
          >
            <img src={i} alt="" className="size-6 mx-2" />
          </motion.div>
        );
      })}
    </div>
  );
};
export default Tech;
