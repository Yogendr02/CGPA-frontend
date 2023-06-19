import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Postdata from "../api/Postdata";
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Card } from "@material-tailwind/react";

export default function FolderList() {
  const branchlist = [];
  const [sendlist,setsendlist] = React.useState([])
  const branch = (primarylist, secondarylist) => {
    branchlist.push({"primary":primarylist,"secondary":secondarylist})
  };
  branch("CSE", "Computer Science and Engineering");
  branch("ECE", "Electronics and Commmunication Engineering");
  branch("EEE", "Electrical and Electronics Engineering");
  branch("Chemical", "Chemical Engineering");
  branch("Mechanical", "Mechanical Engineering");
  branch("Civil", "Civil Engineering");
  branch("Biotechnology", "Biological Engineering");

  const manageclick = (idex) => {
    setsendlist([...sendlist,idex])
    console.log(idex);
    console.log(sendlist);
  };
  const navigate = useNavigate()


  const configure = useSelector((state)=>{
    return state.tokendetail.token.token
  })
  const sendseat = useMutation({
    mutationFn:Postdata,
    onSuccess:()=>{
      navigate("/table")
    }
  })
  const manageclicker = ()=>{
    console.log(sendlist);
    const share = {opt1:sendlist[0],opt2:sendlist[1],opt3:sendlist[2]}
    console.log(share)
    sendseat.mutateAsync({vurl:"senduserseat",sendingdata:share,vconfig:configure})
  }
  
  return (<div className="flex space-x-96">
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {branchlist.map((item) => {
        return (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className="cursor-pointer"
              onClick={()=>{manageclick(item.primary)}}
              primary={item.primary}
              secondary={item.secondary}
            />
          </ListItem>
        );
      })}
    </List>
    <Card className="w-96 h-[160px] grid mt-48">
      <List>
        <ListItem>{sendlist[0]}</ListItem>
        <ListItem>{sendlist[1]}</ListItem>
        <ListItem>{sendlist[2]}</ListItem>
        
      </List>
    <button onClick={manageclicker} className="w-20 m-auto text-white h-12 border-2 mt-28 p-2 rounded-full">upload</button>
    </Card>
    </div>
   
  );
}
