import download from "../assets/download.png";
import { motion } from "framer-motion";
const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-3">
              <p className="sora flex-1 hidden xl:flex font-semibold text-3xl">
                DHANUSH KUMAR M
              </p>
              <p className="sora flex-1 flex xl:hidden ">DK</p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.5 }}
      >
        <div className="navbar-center space-x-10 hidden md:flex">
          <motion.div>
            <a href="#Hero">Intro</a>
          </motion.div>
          <motion.div>
            <a href="#Skills">My Skills</a>
          </motion.div>
          <motion.div>
            <a href="#About">About Me</a>
          </motion.div>
          <motion.div>
            <a href="#Projects">Projects</a>
          </motion.div>
        </div>
      </motion.div>
      <div className="navbar-end">
        <div className=" md:hidden">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {" "}
                <a href="#Hero">Intro</a>
              </li>
              <li>
                <a href="#Skills">My Skills</a>
              </li>
              <li>
                <a href="#About">About Me</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <span className="bg-primary-black">
                  <img src={download} alt="" />
                  Resume
                </span>
              </li>
            </ul>
          </div>
        </div>
        <button className="btn hidden md:flex">
          <p className=" md:flex">Resume</p>
          <img src={download} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Nav;
