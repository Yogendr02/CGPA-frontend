import Confirmation from "../components/Confirmation";
import Seatnumber from "../components/Seatnumber";
import Showseat from "../components/Showseat";

import { motion } from "framer-motion";
export default function Seatamount() {
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
      className="grid grid-cols-2 m-auto mt-10 space-x-5"
      variants={variantation}
      initial="hidden"
      animate="visible"
    >
      <Confirmation />
      <Seatnumber />
      <Showseat/>

    </motion.div>
  );
}
