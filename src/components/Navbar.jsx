import logo from "../assets/images/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 w-full flex justify-between items-center py-6  px-10 lg:px-20">
      <div className="flex  items-center">
        <img className="mx-2" width={50} src={logo} alt="Kevin Rush" />
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
