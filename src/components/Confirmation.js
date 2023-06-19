import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useDispatch,useSelector } from "react-redux";
import { addreg, addpass } from "../store/index";
import {  useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Example() {
  const [open, setOpen] = React.useState(true);

  const dispatch = useDispatch();
  const regdata = useSelector((state)=>{
    return state.confirm.reg
  })
  const passdata = useSelector((state)=>{
    return state.confirm.password
  })
  const vconfig = useSelector((state)=>{
    return state.tokendetail.token.token
  })
  const getconfirm = ()=>{
    const config = {
      headers:{
          "Authorization": `Bearer ${vconfig}`
      }
    }
    return axios.get("https://cgpa-backend.onrender.com/confirmseat",{reg:regdata,password:passdata},config)
  }
  const managechangereg = (event) => {
    dispatch(addreg(event.target.value));
  };
  const managechangepass = (event) => {
    dispatch(addpass(event.target.value));
  };
  const sendconfirm = useQuery({
    queryKey:["confirmed"],
    queryFn:getconfirm
  })
  const handleOpen = () => {
    setOpen((cur) => !cur);
    if (sendconfirm.status === "success"){
      return ;
    }
    
  };

  return (
    <React.Fragment>
      <Dialog size="xs" open={open} className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              name="reg"
              onChange={managechangereg}
              label="Registration number"
              size="lg"
            />
            <Input
              name="password"
              onChange={managechangepass}
              label="Password"
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Validate
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}
