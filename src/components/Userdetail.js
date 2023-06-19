import { Input } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import Postdata from "../api/Postdata";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Example() {
  const [forming, setforming] = useState({
    name: null,
    cgpa: null,
    sgpa1: null,
    sgpa2: null,
    mathsgrade: null,
  });

  const tokens = useSelector((state) => {
    return state.tokendetail.token.token;
  }) 
  console.log(tokens);

  const optseat = useMutation({
    mutationFn: Postdata,
  });

  const navigate = useNavigate();

  const manageclick = () => {
    optseat.mutate({
      vurl: "senduserdetail",
      sendingdata: forming,
      vconfig: tokens,
    });
  };

  const managechange = (event) => {
    setforming({ ...forming, [event.target.name]: event.target.value });
  };
  if (optseat.status === "success") {
    navigate("/optseat");
  }
  return (
    <div className="flex w-72 m-auto mt-10 flex-col gap-6">
      <div className="border-b-2 text-yellow-900 w-36 border-red-900">
        Enter Your details
      </div>
      <Input
        color="blue"
        onChange={managechange}
        className="text-black"
        size="lg"
        name="name"
        label="Name"
      />
      <Input
        color="purple"
        onChange={managechange}
        className="text-black"
        size="lg"
        name="cgpa"
        label="CGPA"
      />
      <Input
        color="indigo"
        onChange={managechange}
        className="text-black"
        size="lg"
        name="sgpa1"
        label="SGPA-1"
      />
      <Input
        color="teal"
        onChange={managechange}
        className="text-black"
        size="lg"
        name="sgpa2"
        label="SGPA-2"
      />
      <Input
        color="red"
        onChange={managechange}
        className="text-black"
        size="lg"
        name="mathsgrade"
        label="Maths grade"
      />
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={manageclick}
        className="text-white font-serif font-bold border-dashed border-2 border-x-white py-2 px-3 mt-2 rounded-full"
      >
        Save
      </motion.button>
    </div>
  );
}
