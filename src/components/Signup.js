import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import signinfunc from "../api/LoginAndSignin";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoken } from "../store"


export default function Login() {

  const [forming,setforming] = useState({
    "name":null,
    "email":null,
    "reg":null,
    "branch":null,
    "password":null
  })

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const reality = useMutation({
    mutationFn: signinfunc,
    onSuccess:(data)=>{
      dispatch(addtoken(data))
      navigate("/detail")
    }
  });


  const manageclick = () => {
    reality.mutate({url:"signup",sendingdata:forming})
  };

  const managechange = (event)=>{
    setforming({...forming,[event.target.name] : event.target.value})
  }

  return (
    <div className="ml-[35vw] mt-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="black" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input onChange={managechange} className="text-black bg-purple-500" size="lg" name="name" label="Name" />
            <Input onChange={managechange} className="text-black bg-purple-500" size="lg" name="email" label="Email" />
            <Input onChange={managechange} className="text-black bg-purple-500" name="reg" type="number" size="lg" label="Registration Number" />
            <Input onChange={managechange} className="text-black bg-purple-500" name="branch" size="lg" label="Branch" />
            <Input onChange={managechange} className="text-black bg-purple-500" type="password" name="password" size="lg" label="Password" />
          </div>
          <Button onClick={manageclick} className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="black" className="mt-4 text-center font-normal">
            Already have an account?
            <button className="font-medium text-blue-500 transition-colors hover:text-blue-700">
              Login
            </button>
          </Typography>
        </form>
      </Card>
      <button></button>
    </div>
  );
}
