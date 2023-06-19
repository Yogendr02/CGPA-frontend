import { TbSchool } from "react-icons/tb";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate()
  const managelogin = () => {
    navigate("/login");
  };
  const manageclick = () => {
    navigate("/signup");
  };
  return (
    <>
      <nav className="w-[95vw] m-auto flex space-x-[78vw] border-b-2 h-20">
        <TbSchool className="h-16 w-16" />
        <div className="h-12 w-20 flex space-x-4">
        <motion.button whileTap={{scale:0.8}} onClick={managelogin} className="h-12 w-20 p-3 text-white text-xl text-justify border-2 rounded-full mt-3" variant="outlined">Login</motion.button>          
        <motion.button whileTap={{scale:0.8}} onClick={manageclick} className="h-12 w-20 p-3 text-white border-2 rounded-full mt-3" variant="outlined">SignUp</motion.button>          
        </div>
      </nav>
    </>
  );
}
