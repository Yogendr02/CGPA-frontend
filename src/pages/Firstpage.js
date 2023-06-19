import { useNavigate } from "react-router";
import { motion } from "framer-motion";
export default function Firstpage() {
  const navigate = useNavigate();
  const manageclick = () => {
      navigate("/login");
  };
  const variantation = {
    hidden: {
      x: -900,
      transition: { ease: "easeInOut" , delay: 1.5, duration: 1.5},
    },
    visible: {
      x:0,
      transition: {type:"spring", delay: 1, duration: 1,damping:8 },
    },
    exit:{
      x: 900,delay:0.5,duration:0.5, opacity: 0 
    }
  };
  return (
    <motion.div 
    className="flex justify-center max-h-full items-center mt-48"
    variants={variantation}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <div>
        <div className="text-white font-serif text-2xl">
          welcome to this new platform for choosing your new branch
        </div>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={manageclick}
          className="text-white ml-64 font-serif font-bold border-2 border-x-white p-2 rounded-full"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}
