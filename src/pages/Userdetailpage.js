import Userdetail from "../components/Userdetail";
import { motion } from "framer-motion";
export default function Userdetailpage() {
  const variantation = {
    hidden: {
      x: "-100vw",
      transition: { ease: "easeInOut", delay: 1.5, duration: 1.5 },
    },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 1, duration: 1, damping: 8 },
    },
  };
  return (
    <motion.div
    variants={variantation}
    initial="hidden"
    animate="visible">
      
      <Userdetail />
    </motion.div>
  );
}
