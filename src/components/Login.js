import { Card, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtoken } from "../store";
import { motion } from "framer-motion";

export default function Login() {
  const [sendingdata, setsendingdata] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const managing = ()=>{
    navigate("/signup")
  }
  const managechange = (event) => {
    console.log(sendingdata)
    setsendingdata({ ...sendingdata, [event.target.name]: event.target.value });
  };
  const gettoken = ({datol}) => {
    return axios
      .post("https://cgpa-backend.onrender.com/login", datol)
      .then((res) => res.data);
  };
  const sendingfunc = useMutation({
    mutationFn: gettoken,
    onSuccess:(data)=>{
      dispatch(addtoken(data))
      localStorage.setItem("token",data.token)
      navigate("/table")
    }
  });
  const managelogin = () => {
    sendingfunc.mutateAsync({datol:sendingdata});
  
  };

  return (
    <div className="ml-[40vw] mt-[10vh]">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 text-black font-normal">
          Enter your details to Login.
        </Typography>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              name="reg"
              onChange={managechange}
              size="lg"
              label="Registration number"
            />
            <Input
              name="password"
              onChange={managechange}
              type="password"
              size="lg"
              label="Password"
            />
          </div>
          <Typography
            color="gray"
            className="flex m-auto mt-4 text-center text-black font-normal"
          >
            Already have an account?{" "}
            <button onClick={managing} className="font-medium text-blue-500 transition-colors ml-4 hover:text-blue-700">
              Sign In
            </button>
          </Typography>
          <motion.button
          whileTap={{scale:0.8}}
            onClick={managelogin}
            className="w-20 h-12 border-2 border-white p-2 rounded-full text-white"
          >
            Login
          </motion.button>
        </div>
      </Card>
    </div>
  );
}
