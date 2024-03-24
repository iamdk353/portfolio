import download from "../assets/download.png";
const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="p-3">
            <p className="sora flex-1 hidden xl:flex">DHANUSH KUAMR M</p>
            <p className="sora flex-1 flex xl:hidden ">DK</p>
          </div>
        </div>
      </div>
      <div className="navbar-center space-x-10 hidden md:flex">
        <a href="">About Me</a>
        <a href="">About Me</a>
        <a href="">About Me</a>
        <a href="">About Me</a>
      </div>
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
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
