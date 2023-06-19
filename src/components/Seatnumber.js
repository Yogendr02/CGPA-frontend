import { Select, Option } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Patchdata from "../api/Patchdata";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Seatnumber() {
  const [seat, setseat] = useState("");
  const [branch, setbranch] = useState();
  const onChange = ({ target }) => setseat(target.value);
  const changeseat = useMutation({
    mutationFn: Patchdata,
    onSuccess:()=>{
      setTimeout(() => {
        navigate("/table");
      }, 3000);
    }
  });
  const auth = useSelector((state) => {
    return state.tokendetail.token.token;
  })
  const navigate = useNavigate();
  const manageclick = () => {
    changeseat.mutateAsync({
      vurl: "changeseat",
      sendingdata: { branch,seat },
      vconfig: auth,
    });
    
  };
  const manageclicking = (data) => {
    setbranch(data);
    
  };

  return (
    <div className="m-auto">
      <div className="flex bg-white flex-col w-72 p-4 rounded-lg gap-6">
        <Select variant="static" label="Select Branch">
          <Option value="CSE" onClick={()=>manageclicking("CSE")}>
            CSE
          </Option>
          <Option value="EEE" onClick={()=>manageclicking("EEE")}>
            EEE
          </Option>
          <Option value="ECE" onClick={()=>manageclicking("ECE")}>
            ECE
          </Option>
          <Option value="Mechanical" onClick={()=>manageclicking("Mechanical")}>
            Mechanical Engineering
          </Option>
          <Option value="Chemical" onClick={()=>manageclicking("Chemical")}>
            Chemical Engineering
          </Option>
          <Option value="Civil" onClick={()=>manageclicking("Civil")}>
            Civil Engineering
          </Option>
          <Option value="Biotechnology" onClick={()=>manageclicking("Biotechnology")}>
            Biotechnology
          </Option>
        </Select>
        <div label="relative flex w-full max-w-[24rem]">
          <Input
            type="numver"
            label="Enter Number"
            value={seat}
            onChange={onChange}
            className="pr-10"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={seat ? "blue" : "blue-gray"}
            disabled={!seat}
            className="!absolute ml-48 -mt-9 rounded"
            onClick={manageclick}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
