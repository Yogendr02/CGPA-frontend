import Choice from "../components/Choice";
import { motion } from "framer-motion";
export default function Main() {
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
      className="flex justify-center space-x-44"
      variants={variantation}
      initial="hidden"
      animate="visible"
    >
      <Choice />
    </motion.div>
  );
}
