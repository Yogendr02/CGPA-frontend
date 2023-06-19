import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

export default function Winner({ list }) {
  console.log(list, "from winner component");
  const giga = useRef(list)
  const navigate = useNavigate()
  const manageclick = ()=>{
    navigate("/")
  }
 useEffect(()=>{
giga.current = list
 },[list])
  const p = giga.current.map((item)=>{
    const itemkey = Object.entries(item)
    return <Card className="mt-6 w-96">
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Registration Number --- {(itemkey[0])[0]}
      </Typography>
      <Typography>
        Congratulations! you have successfully opted
        your new branch {(itemkey[0])[1]}
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button onClick={manageclick}>Back to Homepage</Button>
    </CardFooter>
  </Card>
})
  return <div className="w-[90vw] m-auto grid grid-cols-3 gap-4">
    {p}
  </div> ;
}
