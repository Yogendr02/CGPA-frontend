import Table from "../components/Table";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function Tablepage() {
  const navigate = useNavigate();
  const manageclick = () => {
    navigate("/seatnumber");
  };
  const getwinner = () => {
    navigate("/result");
  };
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
    <>
      <motion.div
        className="absolute top-0 right-0 space-x-1 mt-24 m-2"
        variants={variantation}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={manageclick}
          className="text-white border-x-2 border-b-2 rounded-full border-white p-2"
        >
          Change seat number
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={getwinner}
          className="text-white border-x-2 border-b-2 rounded-full border-white p-2"
        >
          Result
        </motion.button>
      </motion.div>
      <div className="mt-16">
        <Table />
      </div>
    </>
  );
}
